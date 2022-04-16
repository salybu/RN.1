## 1.4 Installing Requirements

We learned that a `RN application` is _**not only made of just `JS`**_.

- JS is the smallest part of this application, is _**the least important part**_ of the application. Our code is the least important part.

&nbsp;

_**The most important**_ thing of a RN application is `all the infrastructure` _**required**_ to allow _**our code**_ to _**talk to the**_ `operative system` _**using**_ these awesome `bridges`. so that is what makes a RN application.

- when you download a RN application, you are _**not only downloading JS code**_. you are downloading an application that _**has all this infrastructure**_ to allow JS code to _**talk to the operative system**_.

a `RN application` is just like a `shell`, where we put our JS code and our JS code will be able to `communicate with the operative system`. This is _**why we need to have java, xcode installed**_ because we actually need to _**build this application**_. we need to _**compile this application**_.

![React Native Infrastructure](https://user-images.githubusercontent.com/66893123/163540619-e7a78b91-e29a-4310-af74-9601094eb1fc.PNG)

and this is what people do, when people make a RN application, they _**create the code**_ and when _**everything is ready**_, they `compile the application` and `all this infrastructure` _**becomes, in the case of**_ `Android`> `apk`, in the case of `iOS`, it becomes a `ipa` (`.apk`/`.ipa`)

- so that is why you need xcode and java. you need java and xcode to _**take this infrasturcture**_ and _**put that into an `apk`**_ and into an `ipa` and _**those are the files**_ that you're going to _**send to the app store**_.

- so when somebody downloads your application, they are going to be _**downloading**_ `all this stuff` _**all these they're going to download**_ plus, _**your js and css code**_.

&nbsp;

> but as I told you, we don't need those things for this course. I know that's a contradiction because I tell you you need them, but in this course you don't need them.
>
> The reason why is because there are some people that have created this application for us. We're going to download this application from the ios app store, from the google playstore, and that application is so cool, and that application has a whole here.

&nbsp;

so that application that is _**already on the app store**_ that we're going to install in our Android or our iOS. that application has `everything` here _**except for these (JS, Markup/Styling)**_. It doesn't have that.

so what we're going to do is we're going to `connect our computer` _**to that application in our**_ `phone`, and we are going to `send` _**that application our**_ `code`.

&nbsp;

RN application is _**the combination**_ of `all this structure` plus `JS code`. All this structure right here (left one) plus all this (right one) and the `bridge` (arrows) all this is made. so our _**JS can talk to the operative system**_.

- There is an app already in the _**google playstore**_, that has `all this infrastructure` ready to go also on the _**iOS appstore**_. That has all this infrastructure ready to go but it _**doesn't have the code (JS, Markup/Styling)**_. This is the one that we're going to be writing on this course.

- so we do _**not need to**_ `compile an application` there is already an application _**that is already compiled**_. It is already on the appstore. we're going to download this application and we're going to _**send the code to that application**_ that means that we're going to be able to _**test our code immediately right in our phone**_.

so the application name and the product name is `expo`. expo is an awesome project that allows people to _**just write some code**_ and _**see the result of that code in the application immediately**_ without even ~~installing any simulators or java or xcode or anything~~.

- The expo people have an application on the _**apple store**_, or the _**google playstore**_, like I said, and this application is ready for us to _**send some code**_ and _**see a preview immediately of how our code will look like on RN**_.

&nbsp;

- all we have to do is [run this code](https://docs.expo.dev/)

```bash
$ npm install --global expo-cli
```

- and next if you are on macOS, you need to install something called _**watchman**_, so you're gonna do `$ brew update`

```bash
$ brew update
$ brew install watchman
```

- if you are on windows, then you just install `expo-cli` and you're done.

&nbsp;

on this course, we _**do not need to**_ `compile` and `make the application`. we don't. instead we're going to be using `expo`. expo allows us to `send our RN code` _**directly to our phone**_. Expo is going to _**execute the RN code in the phone**_, so we can see any _**preview immediately of RN**_ literally in our phone.

- this RN infrastructure is _**the same for most applications**_. most applications have the same infrastructure which is `sending and receiving messages`. The only thing that changes is _**this (JS, Markup/Styling)**_

so now that you installed `expo` using `npm install global expo-cli`, and when that is finished then you're going to _**install the application in your phone**_ is called `expo` on Android or `expo go` in iOS.

- What you're going to do is you're going to go to the Android playstore or iOS Appstore. and you are going to download this application. you will _**create an account**_, and you will _**login**_. and that's it for the installation.

- go to your phone, go to the appstore, and install it. create an account and do all that stuff.

&nbsp;

## 1.5 How Does React Native Work

We're going to explain _**what is and what isn't RN**_ and _**how it works**_.

- If we want to make RN applications and we want to _**test them in our computer**_, we will need to _**download the simulators and all the software required**_ to make normal applications.

- the reason why we have to do this is because we're _**building a real native application**_.

&nbsp;

when you're making a _**reactjs website**_ you know that you just _**make html**_ like this, that goes to the _**reactjs**_ and that _**becomes normal JS**_, and that is _**run by the browser**_.

some people think that RN is just like ~~a mobile website like the browser inside of the app~~ and that is not true. There's `no browser with RN`. we don't use the browser. What RN is a _**beautiful translator**_. RN is an `interface` _**between us**_ and `the operative system iOS` and `Android`.

- so when you make RN code that RN code is _**translated to**_ `iOS code` or `java Android code`.

<p align="center"><img src="https://user-images.githubusercontent.com/66893123/163655857-e62ec039-772b-477a-9614-d16b9a051636.PNG"  alt="RN bridge system" ></p>

If we make a button using RN, we will make the RN code button. we will make a button component. What RN is going to do, `RN` is going to _**ask iOS/Android**_ to please `paint a button`. and _**both iOS and Android**_ are going to `paint a button` and this is why they will _**both of them will look different**_.

- the button in iOS is going to look like an iOS button, the button in Android is going to look like an Android button, because `the operative system iOS and Android`, they are _**the ones creating the button**_. RN _**doesn't**_ `create the button`, RN _**will `send a message` to iOS or Android**_ saying please make a button.

&nbsp;

This is very important because there's _**no browser on `RN`**_. There is something called a `bridge`.

- The good news is that you do not have (bridge part) to do anything. in this section, everything is done for you. we just make the RN code.

We just _**make the RN code**_ and RN we'll _**do the bridge**_ and _**talk to iOS and Android for us**_. This is why it's so awesome. again, RN is _**not like a `browser` inside of the phone**_.

&nbsp;

so now that we know _**what RN is**_ and _**what RN isn't**_.

Let's look a little bit more _**how this `communication` works**_. here we have the diagram of how RN actually works.

so as you can see we have a `native part`, we have a `bridge` and we have `JS`. just to remind you we are not going to be _**writing any code here**_ (`bridge`, `native`). We're going to just be _**writing this part as well (JS)**_ here this is _**the only place where our code will be**_.

<p align="center"><img src="https://user-images.githubusercontent.com/66893123/163656344-34f28aaa-4c5e-47f5-9ecc-6c1f0e8eb054.PNG"  alt="RN-communication-system"></p>

- let's say that we're _**waiting for an**_ `event`. this event will be an event where the user will _**press the button on the screen**_. so that event will be recorded by the `native` side. this means iOS, Android. because they are the ones that are _**controlling the screen**_ they have _**all the detection code**_.

- so `iOS` and `Android` are the ones that are going to `detect the touch event`. iOS and Android are going to _**collect the data about this event**_ maybe _**where in the screen did the event happen**_, _**where was the press**_, _**how long was the press**_, all the information about the event.

&nbsp;

- then `RN` is going to _**take that information**_ and is going to _**make it into a json message**_. and then `JS`, our code _**will receive that message**_.

- `iOS` and `Android` are the ones that are going to be _**listening for an event**_. they are the ones _**controlling the screen**_. they are the ones that can know _**if somebody is pressing the screen or not**_. When the event happpens, `iOS and Android` are going to `send a message` _**using the**_ `bridge to JS`. Here is where our code will be (JS).

&nbsp;

In our code we are going to be `waiting for the event`. when the event happens `the bridge will send us the message` and then we are going to maybe `run some code`, and then we're going to `send a message back to the native`.

let's say that the user will press a button, that event is going to be detected by iOS and Android which is the native part. so then event is detected.
then the data will be collected like for example, the button was pressed, that data will be made into a message. and that message is going to arrive to our JS.

in our JS code, we're going to say that when we receive the event, we now want to change the background color of the screen into red for example. so what we will do here is we are going to call some code and now RN is going to send a message to our native operative system telling the operative system to please change the background color to red.

let's say that we're JS. and somebody else is the operative system. when the user presses the screen, the operative system will tell us to be like somebody press the screen, we will tell them oh really? ok please change the background color to red. and then the operating system will say okay and then the change will happen. so as you can see, we're just receiving and sending messages.

we receive a message that says somebody press the button and we will send a message that says change the background color.

now this is why there is no browser here. JS is just the layer that we developers use to send and receive the messages from the operative system. This is also how the application look like just like this.

so as you can see this is the app, inside there is RN, and RN there is JS interpreter and we have JS / Styles and RN is talking to the bridge and the bridge is talking to the operative system.

now this is why you need to have the simulators and this is why you need to download java and xcode and to do all these downloading things. because you are actually making an application, this is an application, all this.

so when you create an application with RN, this is what you're creating. you're creating an application that has a JS part, that has a bridge that sends messages. this is the thing that you are getting when you make a RN application. you make an app, an Android/iOS app,

and this application is running a JS interface to talk to the operative system, so you can see you're making the application. It's not a website, It's not a browser. you are making an app that has this ability of taking JS and receiving messages sending messages. all that this is what you are making. This is a RN application.

it has JS, it has bridge, and it has some native code to send and receive messages.

this application will be written in java all these will be written in java. you're going to be writing the code here. this is the code (JS) only this part, this is our code maybe this also because of the styles (markup/styling). this is the only code that we're going to write.

we need all this infrastructure. This infrastructure will be built using Java or it will be built using objective-C or Swift like for iOS.

#1.6 Creating the app

now that we have expo-cli installed in our computer and we have expo go, the expo application in our phone. we're going to create an expo project.

https://docs.expo.dev/get-started/create-a-new-app/
here we're going to run $ expo init my-app

we're gonna make a weather application, and we're gonna make a todo app.
$ expo init weather
as you can see there is some options to choose. do not worry about it, you should choose the 1st one. (you will choose the blank template) and that's it. we're gonna installing many things and we just wait.

as you can see, we have some reactjs code. it looks interesting
the most important thing we have pacakge.json so as you can see this looks like a very normal nodejs project. I want to make sure that we can run this RN code in our phone. as you can see here there are 5 commands that we can run.

if you run android or iOS or maybe even eject they're not going to work because you don't have the simulators, you didn't install java, xcode or any of that. don't worry because we don't care about simulators. we're going to test our code right in our phone

we're going to make sure we have our expo client, or our expo application in our phone. so make sure that you have the expo application in your phone.
step number 2, we are going to run the command $ npm start
there is going to open a website (http://localhost:19002) there is going to a QRcode here. and here on your console, there is going to be QR code as well with some command.

› Press a │ open Android
› Press w │ open web

› Press r │ reload app
› Press m │ toggle menu
› Press d │ show developer tools
› shift+d │ toggle auto opening developer tools on startup (disabled)

› Press ? │ show all commands

a to open in Android, i to open in iOS simulator, this is not gonna work because you don't have this installed. The point is now expo is running. and expo is basically waiting for us to execute this code in our phone. and the way we do that, first of all is by logging-in. so let's log-in.

now that we know that everything works. so kill the process. and we're going to login. because you have to login in your computer and you have to login in your phone. so we're going to do $ expo login

오류
$ expo login
Uncaught Error Error: EPERM: operation not permitted, rename 'C:\Users\Gaeun Lee\.expo\state.json.263256779' -> 'C:\Users\Gaeun Lee\.expo\state.json'

고쳤드앙
so I'm logged in. now that we're logged in, let's do $ npm run start. now go to your phone and open the expo application. in your phone (after login), you should see the project that you are working on right now. (http://localhost:19002 tabtitle: weather-app)

and you will see a screen that says opening project, and it's going to be loading on your website.
Tunnel 로 바꾸고 핸드폰에 새로운 url 이 떠서 그거 하니까 됨

It's going to be loading and then you should see some text that says the same thing that is right here in your code.
and on the website, we can already see a new device, this device wasn't here before. and you can see that here on our console.

and now it's time for us to change this text. so we're gonna do other text.
save
and now your phone update.

알림 탭에서 reload 해야 번들링 다시 되면서 움직임. metro 가 어쩌구 끊겼다고 나올 수 있음. file save 를 다시 하면..

all we're doing here is we're taking RN code and we're sending that code immediately to our phone. and our phone is running that code
because agian, as I told you expo, the application that you just downloaded, has all this infrasturcture ready for you. and all we're doing is changing this part (JS, Markup/Style)

so make sure the you are able to modify things and that they update in real time. make sure that you are able to see all the changes from your computer in your phone, make sure that everything is being updated, make sure that it works.

---

#1.7 Recap

on this section we learned that a RN application is much more than just reactjs code, and much more than just JS code, a RN application is a lot of infrastructure a lot of code, that is created to allow us to make JS code and to be able to talk to the operative system.

we now know that a RN application is not just like a browser inside of the phone, we know that RN application is actually native because we are talking to the operative system.

on the native land, events happen like for exmaple somebody touch the screen, the native the os, android, iOS they are going to send a message (bridge) to our JS code. in our JS code we're going to receive that message and we're gonna send another message. and then the native land is going to update the user interface.

our code is just here at the top. evrything else is done for us, the bridge is done for us, and the native code is done for us, everything is done for us.

now this is why we need to have java installed and xcode installed in our computer. because we need to be able to compile this infrastructure. because when you make an application and you send the application to the app store, you are basically taking all this infrastructure, plus your JS code and Markup/Styling .. and you send all that to the appstore. This is why we need simulator, this is why we need java, Android studio, Xcode.

because this infrasturcture will be compiled for android one time and it will be compile for an iOS another time. the only thing that is the same will be the code but the infrasturcture will be compiled in a different programming language for a different cpu architecture.

what expo did is expo compile this infrastructure by themselves using java and using xcode, and they send that infrastructure to the apple store and the google play store. and then you download it that application.
and that application allows us to replace this JS code + Markup/Styling. (through login)
so we can skip this compilation process, we don't have to compile our own infrastructure. expo already compiled the infrastructure for us and expo added one more thing and that is the fact that we now can update this right from our computer in realtime.
