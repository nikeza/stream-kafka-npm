<h1 align="center"></h1>

<div align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo_text.svg" width="150" alt="Nest Logo" />
  </a>
</div>

<h3 align="center">NestJS npm Package Starter</h3>

<div align="center">
  <a href="https://nestjs.com" target="_blank">
    <img src="https://img.shields.io/badge/built%20with-NestJs-red.svg" alt="Built with NestJS">
  </a>
</div>

### Installation

`1`. Run npm install

```bash
npm install stream-kafka
```

### How To Use

`1`. Add configuration

```config
In app.module.ts add in imports: []
StreamModule.register({
  clientId: '<some_name>',
  brokers: ['localhost:9092'],
  groupId: '<some_group_name>',
   }).
```

`2`. Add topic

```abstract
The class which will receive message from Kafka
should (extend -> StreamAbstract -> add super() in constructor) 
then implement (registerTopic()) method and add 
(this.addTopic(<some_topic>) for every topic in this.class).
```

`3`. Receive message

```subscribe
Receiving method should be annotated with
@SubscribeTo(<some_topic>).
```

`4`. Send message

```send
To send message first add 
(private streamService: StreamService)
to constructor's body, then use 
(this.streamService.sendMessage(<sometopic>, <object_to_send>))
method.
```

## Change Log

See [Changelog](CHANGELOG.md) for more information.

## Author

**Community**

## License

Licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## Group

Community group for help, advice and improvement suggestions.

https://t.me/joinchat/PU6-dRzjACMPNuLXZCAtNQ
