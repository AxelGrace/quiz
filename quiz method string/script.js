

  //3
  const vocabularyList = [
  { word: "charAt()", definition: "Mengembalikan karakter pada indeks (posisi) tertentu dalam sebuah string" },

  { word: "charCodeAt()", definition: "Mengembalikan nilai Unicode dari karakter pada indeks (posisi) tertentu dalam sebuah string" },

  { word: "concat()", definition: "Menggabungkan dua atau lebih string menjadi satu string" },

  { word: "constructor", definition: "Mengembalikan fungsi konstruktor untuk string" },

  { word: "endsWith()", definition: "Mengembalikan nilai true jika sebuah string diakhiri dengan nilai tertentu, dan false jika tidak" },

  { word: "fromCharCode()", definition: "Mengembalikan karakter dari nilai Unicode yang diberikan" },

  { word: "includes()", definition: "Mengembalikan nilai true jika sebuah string mengandung nilai tertentu, dan false jika tidak" },

  { word: "indexOf()", definition: "Mengembalikan indeks (posisi) dari kemunculan pertama suatu nilai dalam sebuah string, atau -1 jika tidak ditemukan" },


  { word: "lastIndexOf()", definition: "Membandingkan dua string dengan mempertimbangkan urutan abjad dalam bahasa yang dipakai" },

  { word: "length", definition: "Mengembalikan jumlah karakter dalam sebuah string" },

  { word: "localeCompare()", definition: "Membandingkan dua string dengan mempertimbangkan urutan abjad dalam bahasa yang dipakai" },


  { word: "match()", definition: "Mencari nilai tertentu atau ekspresi reguler dalam sebuah string, dan mengembalikan nilai cocokannya dalam sebuah array" },


  { word: "prototype", definition: "Memungkinkan Anda untuk menambahkan properti dan method ke sebuah objek" },

  { word: "repeat()", definition: "	Mengembalikan sebuah string yang berisi salinan dari string asli yang diulang sebanyak jumlah tertentu" },


  { word: "replace()", definition: "Mengganti nilai tertentu atau ekspresi reguler dalam sebuah string dengan nilai lain, dan mengembalikan hasilnya" },


  { word: "search()", definition: "Mencari nilai tertentu atau ekspresi reguler dalam sebuah string, dan mengembalikan indeks (posisi) pertama kemunculannya" },


  { word: "slice()", definition: "Mengembalikan sebuah substring dari sebuah string berdasarkan indeks awal dan akhir yang ditentukan" },


  { word: "split()", definition: "Memecah sebuah string menjadi sebuah array substring berdasarkan separator yang ditentukan" },


  { word: "startsWith()", definition: "Mengembalikan nilai true jika sebuah string dimulai dengan nilai tertentu, dan false jika tidak" },


  { word: "substr()", definition: "Mengembalikan sebuah substring dari sebuah string ber" },


  { word: "substring()", definition: "Ekstrak karakter dari string, antara dua indeks tertentu (posisi)" },


  { word: "toLocaleLowerCase()", definition: "Mengembalikan string yang dikonversi menjadi huruf kecil, menggunakan lokal host." },


  { word: "toLocaleUpperCase()", definition: "Mengembalikan string yang dikonversi menjadi huruf besar, menggunakan lokal host" },


  { word: "toLowerCase()", definition: "Mengembalikan string yang dikonversi menjadi huruf kecil." },

  { word: "toString()", definition: "Mengembalikan string atau objek string sebagai string" },

  { word: "toUpperCase()", definition: "Mengembalikan string yang dikonversi menjadi huruf besar" },

  { word: "trim()", definition: "Mengembalikan string dengan spasi putih yang dihapus" },

  { word: "trimEnd()", definition: "Mengembalikan string dengan spasi putih yang dihapus dari akhir" },

  { word: "trimStart()", definition: "	Mengembalikan string dengan spasi putih yang dihapus dari awal" },
  
  { word: "valueOf()", definition: "Mengembalikan nilai primitif dari objek bilangan." },
  ];


  
  const askedQuestions = []; // The list of questions that have been asked
  
  let currentQuestion = null; // The current question object
  let incorrectAttempts = 3; // Keep track of the number of incorrect attempts
  
  // Get a random question from the vocabulary list
  function getRandomQuestion() {
    if (vocabularyList.length === 0) {
      // If all questions have been asked, reset the vocabularyList
      vocabularyList.push(...askedQuestions);
      askedQuestions.length = 0;
    }
    const index = Math.floor(Math.random() * vocabularyList.length);
    const question = vocabularyList[index];
    // Remove the question from the vocabularyList and add it to the askedQuestions list
    vocabularyList.splice(index, 1);
    askedQuestions.push(question);
    return question;
  }
  
  // Display a new question
  function newQuestion() {
    currentQuestion = getRandomQuestion();
    document.getElementById("question").innerHTML = currentQuestion.definition;
    document.getElementById("answer").value = "";
    document.getElementById("result").innerHTML = "";
  }
  
  // Check the user's answer and display the result
  function checkAnswer(event) {
    if (event.keyCode === 13) {
      // Check if the "Enter" key was pressed
      const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
      const correctAnswer = currentQuestion.word.toLowerCase();
  
      if (userAnswer === correctAnswer) {
        document.getElementById("result").innerHTML = "benar !!! <br> ayo kamu pasti bisa kifli";
        document.getElementById("result").style.color = "green";
        setTimeout(newQuestion, 200); // Change the question after a delay of 1 second
      } else {
        incorrectAttempts--;
  
        if (incorrectAttempts === 1) {
          const firstLetter = currentQuestion.word.charAt(0);
          document.getElementById("result").innerHTML = `Jawaban salah, petunjuk: ${firstLetter}`;
        } else if (incorrectAttempts === 2) {
          const firstTwoLetters = currentQuestion.word.slice(0, 2);
          document.getElementById("result").innerHTML = `Jawaban salah, petunjuk: ${firstTwoLetters}`;
        } else {
          document.getElementById("result").innerHTML = `Salah jawaban yang benar adalah (${currentQuestion.word})`;
          setTimeout(function () {
            newQuestion(); // Change the question after a delay of 2 seconds
            incorrectAttempts = 3; // Reset the incorrect attempts counter
          }, 2000);
        }
        document.getElementById("result").style.color = "red";
      }
    }
  }
  
  // Display a new question when the page loads
  window.onload = newQuestion;
  