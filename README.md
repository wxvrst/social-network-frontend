## Заметки:

# TODO:
Пересмотреть currentUser и fetchUser 

# Идеи:

Сначала страница авторизации, потом уже доступ к welcome

# Опробовать:

```
<details>
  <summary>Click to expand</summary>
  <p>This content can be expanded or collapsed.</p>
</details>
```

Используй правильные тэги:

```
<section>, <aside>,<article>, <h1>,<h2>, <fieldset>, <optgroup>
```

И новые атрибуты:

```
contenteditable="true"
title=""
poster="" и preload="" для <video>
multiple для <select> и <input>
download="" и target="" для <a>
loading="" для <img>
maxlength/minlength="" и spellcheck="" для <input> и <textarea>
type="file" в связке с accept="" для <input>
```

Не забывай про slots и удобный тэг template:

```
<div class="card">
  <header><slot name="header" /></header>
  <main><slot /></main>
</div>

<!-- Использование -->
<Card>
  <template #header>
    <h1>Заголовок</h1>
    <p>Подзаголовок</p>
  </template>

  <!-- дефолтный слот тоже может отдать несколько узлов -->
  <p>Первый абзац</p>
  <p>Второй абзац</p>
</Card>

```

и ещё единственный способ получить несколько узлов в итерации слота

```
<List :items="users">
  <template #item="{ user }">
    <Avatar :src="user.avatar" />
    <span>{{ user.name }}</span>
  </template>
</List>
```
