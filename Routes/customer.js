const Customer = () => { };
import { Kafka, logLevel } from 'kafkajs';

const kafka = new Kafka({
    clientId: 'api_customer',
    brokers: ['kafka:9092'],
    logLevel: logLevel.WARN,
    retry: {
        initialRetryTime: 300,
        retries: 10
    },
});

const Producer = kafka.producer();

Customer.run = async () => {
    await Producer.connect();
}

Customer.send = async (req, res) => {
    await Producer.send({
        topic: 'customer-topic',
        messages: [
            { value: 'Hello KafkaJS user!' },
        ]
    });
    res.send({ok: true});
}

module.exports = Customer;