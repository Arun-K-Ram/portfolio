from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allow cross-origin requests from your React frontend

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    # For now, just print the message to console (you can save or email it later)
    print(f"New message from {name} ({email}): {message}")

    # Send success response
    return jsonify({"message": "Thanks for reaching out!"}), 200

if __name__ == '__main__':
    app.run(debug=True)
