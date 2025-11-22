const keymap = {
  "z": "key-a",
  "x": "key-b",
  "c": "key-c",
  "v": "key-d",
  "b": "key-e",
  "n": "key-f",
  "m": "key-g",
  "a": "key-h",
  "s": "key-i",
  "d": "key-j",
  "f": "key-k",
  "g": "key-l",
  "h": "key-m",
  "j": "key-n",
  "k": "key-o",
  "l": "key-p",
  "q": "key-q",
  "w": "key-r",
  "e": "key-s",
  "r": "key-t",
  "1": "key-1",
  "2": "key-2",
  "3": "key-3",
  "4": "key-4",
  "5": "key-5",
  "6": "key-6",
  "7": "key-7",
  "8": "key-8",
};
const soundmap = {
  "key-a": "sounds/a.mp3",
  "key-b": "sounds/b.mp3",
  "key-c": "sounds/c.mp3",
  "key-d": "sounds/d.mp3",
  "key-e": "sounds/e.mp3",
  "key-f": "sounds/f.mp3",
  "key-g": "sounds/g.mp3",
  "key-h": "sounds/h.mp3",
  "key-i": "sounds/i.mp3",
  "key-j": "sounds/j.mp3",
  "key-k": "sounds/k.mp3",
  "key-l": "sounds/l.mp3",
  "key-m": "sounds/m.mp3",
  "key-n": "sounds/n.mp3",
  "key-o": "sounds/o.mp3",
  "key-p": "sounds/p.mp3",
  "key-q": "sounds/q.mp3",
  "key-r": "sounds/r.mp3",
  "key-s": "sounds/s.mp3",
  "key-t": "sounds/t.mp3",
  "key-1": "sounds/1.mp3",
  "key-2": "sounds/2.mp3",
  "key-3": "sounds/3.mp3",
  "key-4": "sounds/4.mp3",
  "key-5": "sounds/5.mp3",
  "key-6": "sounds/6.mp3",
  "key-7": "sounds/7.mp3",
  "key-8": "sounds/8.mp3",
};

const pressedkeys = new Set();

document.addEventListener("keydown", (event) => {
  const keyId = keymap[event.key];
  if (!keyId) return;

  if (pressedkeys.has(event.key)) return;
  pressedkeys.add(event.key);

  const key = document.getElementById(keyId);
  if (!key) return;

  key.classList.add("active");

  const audio = new Audio(soundmap[keyId]);
  audio.currentTime = 0; 
  audio.play();
});

document.addEventListener("keyup", (event) => {
  const keyId = keymap[event.key];
  if (!keyId) return;

  pressedkeys.delete(event.key);

  const key = document.getElementById(keyId);
  if (!key) return;

  key.classList.remove("active");
});
