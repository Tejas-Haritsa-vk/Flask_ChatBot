from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index_03.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get("message")
    
    # Simple bot response (replace with AI model if needed)
    bot_response = f"Bot: {user_message[::-1]}"  # Just reversing text as a placeholder
    
    return jsonify({"response": bot_response})

# if __name__ == '__main__':
    # app.run(debug=True)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
