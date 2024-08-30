pfrom datetime import datetime

now = int(datetime.now().strftime('%H'))

def greeting(time):
    if time >= 00 and time < 12:
        return 'Good morning,'

    elif time >= 12 and time < 16:
        return 'Good afternoon,'

    else:
        return 'Good night,'


hello = greeting(now)
user = input('Please, enter your name: ')
print(hello + ' ' + user)