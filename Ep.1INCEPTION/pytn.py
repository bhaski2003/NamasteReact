import telegram
from telegram.ext import Updater, MessageHandler, Filters
import openai
openai.api_key = "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"

import requests

# creating Session object and
# declaring the verify variable to False
session = requests.Session()
session.verify = False
bot = telegram.Bot(token='6181791555:AAHXqLQzTvvWdqQn0sTvlmXM10NxfWsWpq0', base_url='https://api.telegram.org' ,request=None)

# define the function to generate responses using ChatGPT
def generate_response(text):
    response = openai.Completion.create(
        engine="davinci", prompt=text, max_tokens=1024, n=1, stop=None, temperature=0.7
    )
    return response.choices[0].text

# define the function to handle incoming messages
def handle_message(update, context):
    # get the user's message
    message_text = update.message.text

    # generate a response using ChatGPT
    response_text = generate_response(message_text)

    # send the response back to the user
    context.bot.send_message(chat_id=update.effective_chat.id, text=response_text)

# initialize the Telegram bot using the bot token
updater = Updater(token='6181791555:AAHXqLQzTvvWdqQn0sTvlmXM10NxfWsWpq0', use_context=True)

# add a handler to handle incoming messages
updater.dispatcher.add_handler(MessageHandler(Filters.text, handle_message))

# start the bot
updater.start_polling()
updater.idle()