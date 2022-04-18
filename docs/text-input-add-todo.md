## 3.0 Introduction

We're going to be making Todo app. It's going to be an application where we can write down our to-do list, but also our travel list, so it's gonna be a work-hard-travel-hard application.

- so We're going to be learning about _**how to handle**_ `press buttons` right on RN because the users should _**switch between traveling and working**_ and also we're going to learn `how to input data` _**into the application**_.

- and are going to learn about `TextInputs`, _**control the**_ `keyboard with the TextInputs` and _**how the**_ `input is different in RN` _**from normal reactjs**_ on the web. so for example, we _**don't have forms in RN**_. there's no concept like a form like it is on the html,

- We're going to see the `rules of the Inputs` _**in RN**_ and we're going to learn about _**data persistence**_ because if my user write something in my application I would like to `save that on the disk` _**of the phone**_. so I want to be able to refresh the app turn off, turn on the phone and I want the data to _**still be there**_.

- of course, we're going to be doing basic _**RN things**_ like `updating state`, and `deleting a to-do` and all that stuff

- don't worry I'm going to talk about _**the difference between managed and bare**_ at the end of this course.

맨 처음 앱 만들 때 expo init my-app --npm(?은 뭐야)

&nbsp;

## 3.1 Touchables

My plan is to first make the _**header of the application**_.

- on the header, we're going to have _**2 buttons**_, one that says `work`, and the other one here that says maybe `travel`. and when the _**`user taps on travel`, below `part will change`**_. and when _**the user taps on work, this part will change as well**_.

we're gonna see how we can make that happen, let's first get started with the buttons. first we're going to do _**the styles**_, and then we're going to do _**the buttons**_.

&nbsp;

We haven't talked about buttons and `how we can handle press on RN` as you can see I'm _**saying press**_ because there is _**no click**_, is `pressed` _**from your thumb, your fingers**_.

- and then we're going to give our whole container a `paddingHorizontal` and this is something that we _**don't have on css**_. or we have padding shortcut which is this is _**0 top and bottom 10 left and right**_.

```css
padding: "0px 10px";
```

- the cool thing about RN is that we have a property that doesn't exist on css and that is `paddingVertical` or `paddingHorizontal`.

&nbsp;

when the user _**has selected**_ `work`, work _**is going to be like**_ `white`, and now let me show you the `state of what would happen` for example to `travel`, so the _**enable button will be white**_, the `not enabled` _**button will be a**_ `little gray`.

because we're going to be talking about colors I think it's very important if we just create here, a new file, and we're going to call this `colors.js`. and here we're gonna have `theme`.

```javascript
/* colors.js */
export const theme = {
  bg: "black",
  grey: "#5C5C60",
};
```

&nbsp;

> and on this course, we're not gonna do dark mode and light mode, that if you want to learn is on the pro course. for example we can detect if the user has dark mode enabled so we're gonna show them the app like this or we can detect if the user has normal mode or light mode enabled and then we show them the white version.

&nbsp;

The next thing to show you is `how to detect if somebody presses or clicks` but it's more like a _**press**_, somebody press a button, so for buttons we have _**3 components**_ that are very interesting.

- number 1 components that many people use is [`TouchableOpacity`](https://reactnative.dev/docs/touchableopacity). TouchableOpacity is _**sort of a `View` so like a box**_, View, that is ready to `accept or listen for pressing events` and _**is opacity**_ because it _**has an animation**_ included for you.

  - so now if I tap, as you can see it becomes _**a little bit**_ `transparent` that's called _**opacity**_.

  - so this is touchable, and it's opacity. that means that when you press on it, _**the animation is already there for you**_ and that will be just like that. it makes the tapped element a little bit opaque.

&nbsp;

- we also have another touchable, and that would be [`TouchableHighlight`](https://reactnative.dev/docs/touchablehighlight). TouchableHighlight has more props than Touchableopacity.

  - Touchableopacity, they have styles, they can _**configure the opacity**_ of the element when you're clicking them.

  - when I am _**clicking or tapping**_ the element I want _**0 opacity**_. so that means that _**If I tap literally 0 opacity**_. so we can configure TouchableOpacity but we have also TouchableHighlight and it has more props. and it's a little bit different.

```javascript
<TouchableOpacity activeOpacity={0}>
  <Text style={styles.btnText}>Work</Text>
</TouchableOpacity>
```

&nbsp;

- `TouchableHighlight` allows you to basically `specify a background color` that is going to _**show up when you click on the element**_,

  - If I refresh here, and when I'm tapping nothing happens, because we _**have to add some props**_ for `TouchableHighlight`.

  - The most important one is `onPress`. onPress is going to be the event that _**gets fired when the user presses the touchable**_. `Touchableopacity` also have the same event onPress.

  - `onPressIn`, this means when the _**finger goes in**_, `onPressOut`, when the _**finger goes out**_. or `onlongPress` when the finger _**enters and stays for a long time**_.

  - you don't have to specify in and out you can _**just specify**_ `press`. because press means when they finger comes in and out that is a press.

  - `Touchablehighlight` becomes different from `TouchableOpacity` when we specify the `underlaycolor`.

```javascript
<TouchableHighlight
  underlayColor="#DDDDDD"
  onPress={() => {
    console.log("pressed");
  }}
>
  <Text style={styles.btnText}>Travel</Text>
</TouchableHighlight>
```

and now when I tap, as you can see, there is a color that shows up. It's different there is a color that shows up. so like the background color changes which is interesting. now this one you can use for other things I personally use `Touchableopacity` more because I rarely want to share the background color but this actually works.

and Now I'm going to show you `TouchableWithoutFeedback`. TouchableWithoutFeedback is a _**touchable component**_ this means that is _**listening for any tap event**_ on the screen but there is _**no graphic, no UI reaction**_.

- so the UI the way the user looks at your application is not going to change so if you do TouchableWithoutFeedback here. it will be a touchable and console.log would be printed but there is no animation.

this is the one I use most of the time I will be using `Touchableopacity` If i want to show the user that _**the tab?p? has a consequence**_.

but sometimes you _**don't want to show this to the user**_ so instead you use `Touchablewithoutfeedback`. which is a view that has all these events like _**onPress, onPressin, and all that stuff**_. but it _**doesn't have any**_ of the _**ui consequences**_ as you can see. there is _**no animation**_, it looks like it's not working but actually we are _**listening to the onPress event**_.

and there is actually one new one, this one is called [`pressable`](https://reactnative.dev/docs/pressable). pressable is like `Touchablewithoutfeedback` but It's new. let's put it here. pressable is supposed to be newer as you can see on the docs. and it's supposed to be _**more configurable in a sense**_.

- so maybe in the future, touchableopacity will disappear.

- and it has _**other sort of configuration**_ also we have onpressIn, and then maybe some time will pass, that will _**fire the event onLongPress**_, and of course _**that triggers onPressout**_. these are all the combinations.

- we can also _**configure delayLongPress**_. this means that we can actually \__**configure how long is a long press**_. If you want your users to press for 10 seconds you can configure that so it's a little bit _**more configurable**_.

also we _**have**_ `disabled`. we don't have disabled in `TouchableOpacity`. so we have to use `pressable` if we want to show that to the user, most of things that I've seen are using touchableopacity because it's so easy to use.

- also this is important there is something called the `hitSlop`. and the hitSlop is _**sort of a distance outside of the element**_, that you can _**specify to detect the tap**_.

- you could say that if the user is _**tapping here**_, this _**should engage the work**_ so you can make the element _**a little bit bigger**_ for the thumb of the user.

- because the text is being surrounded by the TouchableOpacity.

- with `pressable` you are going to be able to specify and maybe even if the user press here, that means touching. not only on the text, maybe here also. pressable is more configurable.

I will see you on the next video, where we are going to _**switching between work and travel**_ and we're going to _**see those changes in our UI**_ and we're gonna _**talk about TextInput**_.

&nbsp;

## 3.2 TextInput

we're going to be building the _**switch between these 2**_, and this is not going to be RN work, it's gonna be only just _**normal reactjs thing**_.

we tap, and of course there is no difference because now we have to _**change the styles**_. so what I want to do is I want to get these styles. but I want to add color white or color grey _**depending on if I'm working or traveling**_.

we'll start just to make sure that it works. yeah.

&nbsp;

Lets' talk about [`TextInputs`](https://reactnative.dev/docs/textinput). in RN we have Textinput we _**don't have sort of textarea, input**_ like in html,css. and `TextInput` have a lot of props. that we're going to look at right now and that's right here. look at the amount of props. there's a lot of props.

`Textinput` is the only way that your user _**can write text in RN**_. and it's actually very easy to get started working with TextInput. let me just use it first, and then we're going to customize it. It's nowhere to be found we cannot see it, so _**let me just give it a style**_.

let's do a bgcolor of white to see where it is. now if I tap, as you can see now I'm able to type. but now we're going to start _**configuring this things**_ so let's first of all look at a [`placeholder`](https://reactnative.dev/docs/textinput#placeholder) prop.

```javascript
<TextInput
  keyboardType="number-pad"
  placeholder={working ? "Add a To Do" : "Where do you want to go?"}
  style={styles.input}
/>
```

next step, we're going to make this thing pretty. it looks like we don't need this view after all.

let's look at the props everybody. we have many props for example, we have one to _**detect on focus**_. `focus` means _**when I tap on it and I'm ready to write**_ that means focus. we also have `onPressIn`, `onPressOut`,..

this is what we're looking for, `onChangeText`. onChangeText is what will _**give us the text**_ here. we also have `numberofLines` which is only for Android I think.

this is something that is cool, [`keyboardType`](https://reactnative.dev/docs/textinput#keyboardtype). because sometimes the user will be _**maybe writing a email, a phone number**_, you _**are able to change the keyboard type**_. we have some _**keyboard types that work across platforms**_.

- we also have _**email address**_. so they give us @ key for free. let's do phone, what's the difference between phone and number pad. _**phone has \,+,#**_. there are iOS, Android only pad, too.

url > /, .com 등 추가
web-search > go 버튼

you can configure so many things from a prop. prop `returnKeyType` and `returnKeyLabel` this one only works for Android. we're going to look at `returnKeyType`. returnKeyType _**allows you to change the way**_ that this looks like (_**return key on the keyboard**_). so look at that send key.

- you can also do search, or next... in Android you can use none.. in iOS you can use google, join..

- and you're _**on Android**_ you can also _**change the label**_ I think. so in Android, you can write whatever you want. so you can _**change this text**_ from send to whatever you want.

```javascript
<TextInput
  returnKeyType="send"
  placeholder={working ? "Add a To Do" : "Where do you want to go?"}
  style={styles.input}
/>
```

this is us react developers _`configuring the operative system` just _**by**_ `using props` and this is what I keep telling you we're _**not in the browser anymore**_. but react as an idea as a _**combination of components plus props**\_ allows us to go to any platform.

> at the end of this video, you can also write reactjs code that will be turned into a vr experience.
>
> so the idea of `props` plus `components` and `state`, is really good. some people decide to use this idea to make javascript code _**on the browser**_, some people decide to take this idea of components, state and props and use them to _**configure the operative system**_. and as you will see later the same idea, components, state, props will be used to _**create VR experiences**_.

so as you can see, it's just about react as an idea, you can learn once and you can _**deploy anywhere**_.

`secureTextEntry` prop. If you are for some reason _**writing a password**_ then you will do `secureTextEntry` and that means as you can see here that this is a password.

```javascript
<TextInput
  secureTextEntry
  placeholder={working ? "Add a To Do" : "Where do you want to go?"}
  style={styles.input}
/>
```

I think we need to look at `multiline`, multiline is _**what would happen**_ if you maybe _**have more than one line**_ so for example, that would look something like this.

```javascript
<TextInput
  multiline
  placeholder={working ? "Add a To Do" : "Where do you want to go?"}
  style={styles.input}
/>
```

that would be multiline, the user _**is able to write like a text**_ if you are building an application like this that is multi-line. If we don't have multiline then it will just be a one-liner. when I _**press enter, nothing happens,**_ so that will be a multiline, this is not multiline, this is a single line.

we have many things to configure.

```javascript
<TextInput
  placeholderTextColor="red"
  placeholder={working ? "Add a To Do" : "Where do you want to go?"}
  style={styles.input}
/>
```

we want to be able to _**check how the text has changed**_. and that will be here, `onChangeText`. That will be _**just a function**_ and we're gonna see _**what this function will give us**_. we're gonna say on change

```javascript
const onChangeText = (event) => console.log(event);
```

we reload, and look as you can see. this is how easy it is. done. again we're _**not on the browser**_ remember that. _**on the browser**_ we have things like _**event target**_ or that we don't have that anymore. we're on RN it's different.

before I go let me just show you a couple more things. you can specify what happens when the user selects the text if that's what you want (selection)

you can also _**specify the password rules in iOS**_ which I think is pretty cool, but also something that we could check or not is the way that _**the keyboard helps people**_ for example here (`autoCorrect`) autocorrect you _**can disable that if you want**_.

- it will try to autocorrect to Bonanza. or something like that, you can disable this if you want.

also you can capitalize, here, `autoCaplitalize`. you can _**specify what you want to capitalize**_. Capitalize means letter Capitals. by default your phone will always start like this to help you write like a normal person.

- as you can see the first m is capital. but we can also make it that _**all the word are capitalized**_. capitals xxxx space capitals again xxxx space capitals again.

```javascript
<TextInput
  autoCapitalize={"sentence"} // "words"
  onChangeText={onChangeText}
  placeholder={working ? "Add a To Do" : "Where do you want to go?"}
  style={styles.input}
/>
```

last thing before we need to go, we need to _**save the text**_ that the _**user is writing in our state**_. I will see you on the next one, to see _**what happens when the user will press here(return)**_, because now we need to _**save the todo**_.

&nbsp;

## 3.3 ToDos

now we're going to _**detect when the user taps this button**_, _**to submit**_ because we need to know when that happens. and that event is called `onSubmitEditing` so we're going to find it we're going to put it here,

we come here, and return. as you can see, there it is. now I want to change this key to something else. so now we can exit if we don't want to add a todo and now we can _**check if the todo is empty or not**_.

- if the text is _**currently in our state**_, _**is not empty**_, here we're gonna save todo.

```javascript
const addTodo = () => {
  if (text === "") {
    return;
  }
  alert(text);
};
```

step number 2, we're going to _**make a state for todos**_, and here is setTodos .. and many people _**would put an array**_ here. and that's fine. but we're going to be _**using an object**_. we're gonna _**build sort of a hashmap**_

> if you don't know what a hashmap is go in our youtube video, algorithm & datastructure...

show how we're going to structure our todos, so you understand what I'm doing and why am I using a hashmap.

const toDos = {};

what we want to do is we want to _**have a todo object**_ that looks like this. the object that _**starts being empty**_ and then we say toDos and my goal will be to have something like this

toDos[Date.now()] = {text: "record", work: true}; >
where the _**Date.now() will be an Id**_. and then I will just do text and that would be for example, working or record and work will be true. so now if we look at toDos there it is, we have _**a id sort of**_ and then we have _**the payload**_.

this is gonna be very useful because if you want to _**delete one record**_, all you have to do is just come here to the id and delete the id. or if you want to _**update a record**_ or you have to do is just come the id and update whatever you want.

the thing is that let's say that I want to _**add one more todo**_.

toDos[] = {} >> this is _**not allowed in reactjs**_. It isn't because in reactjs you _**never mutate the state directly**_. you shouldn't do this in reactjs
what you need to do is _**always use setState**_. so what we basically have to do is _**always send a new object with the new todos**_. so basically we want to _**take the old todos and combine them with a new todo**_. we shouldn't ever mutate the state directly so what we're going to do is we're going to be using `Object.assign`.

object assign _**takes an object**_ and _**combines it with another object**_ that's basically it's really easy. and it will _**return a new object**_. instead of mutating the todos what I do is use Object.assign.

Object.assign will take as you can see _**a target**_, which it will _**be a new object**_, and it will _**take many sources**_ as many sources as you want. so it will take for example _**toDos**_ (source1 in this case it will be toDOs) and the source 2 will be _**another object.**_
{x: "hello"}
now of course it will be cool if instead of making this like that we _**follow the structure that todos has**_ so to _**put a variable in the key**_ all we have to do is do this. and then here, create an another object and we say work and this one will be false. and that's it. so now as you can see this is _**combining 2 objects**_. so this is what we're going to be using

we're using `Object.assign` to _**combine 3 objects**_. first, we combine an _**object, that is empty**_, this is going to be our _**target object**_, then we _**take the old todos**_ and we _**combine it with an object with the newest todo**_. that's it

```javascript
const addTodo = () => {
  if (text === "") {
    return;
  }
  // save to do
  const newTodos = Object.assign({}, toDos, {
    [Date.now()]: { text, work: working },
  });
  setToDos(newTodos);
  setText("");
};
console.log(toDos);
```

we're console.log todos.

so now we're _**combining 2 objects without mutating the state**_. now as you can see my todo's object has 2 keys.

so that was a _**logic part nothing to do with RN just JS things**_. on the next video, we're going to be _**painting our todos**_. that means we're going to _**create a scrollview**_. we're gonna show the todos here.
