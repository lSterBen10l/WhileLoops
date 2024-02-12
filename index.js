// Oppgave 1: Skrive ut tallene fra 0 til 50
let i = 0;
while (i <= 50) {
  console.log(i);
  i++;
}

// Oppgave 2: Skrive ut alle partallene mellom 1 og 100
let j = 2;
while (j <= 100) {
  console.log(j);
  j += 2;
}

// Oppgave 3: Skrive ut alle tallene i 3-ganger'n opp til 999
let k = 0;
while (k <= 999) {
  console.log(k);
  k += 3;
}

// Oppgave 4: Skrive ut tall fra 1 til 1000 som er delbare med 3 og 5
let l = 15; // Starter fra 15 siden det er det første tallet som er delbart med både 3 og 5
while (l <= 1000) {
  console.log(l);
  l += 15; // Øker med 15 for å hoppe direkte til neste tall som er delbart med både 3 og 5
}

// Oppgave 5: Summere alle tallene fra 1 til 100
let m = 1, sum = 0;
while (m <= 100) {
  sum += m;
  m++;
}
console.log(sum);

// Oppgave 6: Skrive ut en trappeformet struktur med #
let n = 1, tekst = "";
while (n <= 4) {
  tekst += "#";
  console.log(tekst);
  n++;
}

// Oppgave 7: Skrive ut en linje med 50 #
let o = 1, femtiHasher = "";
while (o <= 50) {
  femtiHasher += "#";
  o++;
}
console.log(femtiHasher);
