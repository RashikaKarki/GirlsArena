import pandas as pd
import re
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfTransformer
from bs4 import BeautifulSoup
import requests


def get_stop_words(stop_file_path):
    with open(stop_file_path, 'r', encoding="utf-8") as f:
        stopwords = f.readlines()
        stop_set = set(m.strip() for m in stopwords)
        return frozenset(stop_set)

def sort_coo(coo_matrix):
    tuples = zip(coo_matrix.col, coo_matrix.data)
    return sorted(tuples, key=lambda x: (x[1], x[0]), reverse=True)

def extract_topn_from_vector(feature_names, sorted_items, topn=5):
    sorted_items = sorted_items[:topn]
    score_vals = []
    feature_vals = []

    for idx, score in sorted_items:
        fname = feature_names[idx]
        score_vals.append(round(score, 3))
        feature_vals.append(feature_names[idx])
    results= {}

    for idx in range(len(feature_vals)):
        results[feature_vals[idx]]=score_vals[idx]
    return results

def find_keyword(df):
    docs = []
    for i in df['link'].tolist():
        try:
            source = requests.get(i).text
            soup = BeautifulSoup(source, 'lxml')
            docs.append(soup.text)
        except:
            docs.append("")
    stopwords=get_stop_words("./resources/stopword.txt")
    cv=CountVectorizer(max_df=0.85,stop_words=stopwords)
    word_count_vector=cv.fit_transform(docs)
    cv=CountVectorizer(max_df=0.85,stop_words=stopwords,max_features=10000)
    word_count_vector=cv.fit_transform(docs)
    tfidf_transformer=TfidfTransformer(smooth_idf=True,use_idf=True)
    tfidf_transformer.fit(word_count_vector)
    feature_names=cv.get_feature_names()
    keywords = []
    for doc in docs:
        tf_idf_vector=tfidf_transformer.transform(cv.transform([doc]))
        sorted_items=sort_coo(tf_idf_vector.tocoo())
        keywords.append(list(extract_topn_from_vector(feature_names,sorted_items,2).keys()))
    

    return keywords




