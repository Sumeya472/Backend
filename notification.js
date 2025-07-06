class NotificationChannel {
  send(message) {
    throw new Error('Method not implemented');
  }
}

class EmailNotification extends NotificationChannel {
  constructor(emailAddress) {
    super();
    if (!emailAddress) throw new Error('Email required');
    this.emailAddress = emailAddress;
  }

  send(message) {
    console.log('Sending EMAIL to ${this.emailaddress}: ${message}');
  }
}

class SmsNotification extends NotificationChannel {
  constructor(phoneNumber) {
    super();
    if (!phoneNumber) throw new Error('Phone number required');
    this.phoneNumber = phoneNumber;
  }

  send(message) {
    console.log('Sending SMS to ${this.phoneNumber}: ${message}');
  }
}

class TelegramNotification extends NotificationChannel {
  constructor(telegramId) {
    super();
    if (!telegramId) throw new Error('Telegram ID required');
    this.telegramId = telegramId;
  }

  send(message) {
    console.log('Sending Telegram to ${this.telegramId}: ${message}');
  }
}

class NotificationService {
  constructor(channel) {
    this.channel = channel; 
  }

  send(message) {
    this.channel.send(message);
  }
}

const email = new EmailNotification('nexus@email.com');

const sms = new SmsNotification('1234567890');

const telegram = new TelegramNotification('telegram_user_42');

const service1 = new NotificationService(email);
service1.send('Hello!');

const service2 = new NotificationService(sms);
service2.send('Hi!');

const service3 = new NotificationService(telegram);
service3.send('Yo!');