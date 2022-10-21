from flask import Flask , render_template, url_for , request
import numpy as np
import pandas as pd
import joblib

app=Flask(__name__)

@app.route('/')
def website():
    return render_template('website_home.html')
@app.route('/index')
def index():
    return render_template('coming_soon.html')
@app.route('/index2')
def index2():
    return render_template('titanic_form.html')
@app.route('/app/titanik' , methods=['POST'])
def home():
    model=joblib.load('titanik_alive_predictor.pkl')
    num=request.form['numbers']
    num1 = request.form['numbers1']
    num2 = request.form['numbers2']
    num3 = request.form['numbers3']
    a=[[num,num1,num2,num3]]
    predicton=model.predict(a)
    b=str(predicton)
    if predicton[0]==1:
        return render_template('alive.html')
    elif predicton[0]==0:
        return render_template('dead.html')
app.run(debug=True,host="0.0.0.0")

