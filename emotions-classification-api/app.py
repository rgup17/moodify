import streamlit as st
import numpy as np
import pandas as pd
import pickle
import nltk
from nltk.stem import PorterStemmer
from nltk.corpus import stopwords


# Download the NLTK resources
nltk.download('stopwords')
stopwords = set(nltk.corpus.stopwords.words('english'))

# Load the models

lg = pickle.load(open('models/logistic_regression.pkl', 'rb'))
lb = pickle.load(open('models/label_encoder.pkl', 'rb'))
tfidf_vectorizer = pickle.load(open('models/tfidf_vectorizer.pkl', 'rb'))
import re

# Functions to predict the emotion

def clean_text(text):
  stemmer = PorterStemmer()
  text = re.sub("[^a-zA-Z]", ' ', text)
  text = text.lower()
  text = text.split()
  text = [stemmer.stem(word) for word in text if word not in stopwords]
  return " ".join(text)

def predict_emotion(input_text):
    cleaned_text = clean_text(input_text)
    input_vectorized = tfidf_vectorizer.transform([cleaned_text])

    # Predict emotion
    predicted_label = lg.predict(input_vectorized)[0]
    predicted_emotion = lb.inverse_transform([predicted_label])[0]
    label =  np.max(lg.predict(input_vectorized))

    return predicted_emotion,label

# app
st.title("Moodify")
st.write("This app predicts the emotion based on the text you input. The emotions are: 'joy', 'sadness', 'fear', 'anger', 'love', 'surprise'.")

input_text = st.text_area("Write down your thoughts here")

if st.button("Predict how you are feeling"):
  predicted_emotion, label = predict_emotion(input_text)
  st.write("The emotion predicted is:", predicted_emotion)
  st.write("The probability is:", label)  