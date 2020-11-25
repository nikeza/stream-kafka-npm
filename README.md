# stream-kafka-npm
NestJS npm Package Starter


Installation
1. Run npm install
npm install stream-kafka

How To Use
1. Add configuration
In app.module.ts add in imports: []
StreamModule.register({
  clientId: '<some_name>',
  brokers: ['localhost:9092'],
  groupId: '<some_group_name>',
   }).
   
2. Add topic
The class which will receive message from Kafka
should (extend -> StreamAbstract -> add super() in constructor) 
then implement (registerTopic()) method and add 
(this.addTopic(<some_topic>) for every topic in this.class).

3. Receive message
Receiving method should be annotated with
@SubscribeTo(<some_topic>).

4. Send message
To send message first add 
(private streamService: StreamService)
to constructor's body, then use 
(this.streamService.sendMessage(<sometopic>, <object_to_send>))
method.

Change Log
See Changelog for more information.

Author
Community

License
Licensed under the MIT License - see the LICENSE file for details.

Group
Community group for help, advice and improvement suggestions.
https://t.me/joinchat/PU6-dRzjACMPNuLXZCAtNQ
