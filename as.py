from flask import Flask, request, jsonify
from google.cloud import dialogflow

app = Flask(__name__)

@app.route('/process-message', methods=['POST'])
def process_message():
    user_message = request.json.get('message')
    
    # Use Dialogflow API to process the message and get a response
    response = dialogflow.detect_intent_texts(project_id='your_project_id', session_id='unique_session', text=user_message, language_code='en')
    
    # Extract the response from Dialogflow
    bot_reply = response.query_result.fulfillment_text
    
    return jsonify({'reply': bot_reply})

if __name__ == '__main__':
    app.run(debug=True)
