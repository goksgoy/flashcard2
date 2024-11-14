// Vocabulary List: You can add more words and meanings
const vocabulary = [
    { word: "以前", meaning: "いぜん/Tadinya" },
  { word: "以降", meaning: "いこう/Setelah" },{ word: "以上", meaning: "いじょう" },{ word: "以下", meaning: "いか" },{ word: "以外", meaning: "いがい/Selain" },
  { word: "以後", meaning: "いご/Setelah ini" },{ word: "空気", meaning: "くうき" },{ word: "欠席", meaning: "けっせき/Absen" },{ word: "欠点", meaning: "けってん/Kekurangan" },
  { word: "欠かす", meaning: "かかす/Kehilangan" },{ word: "失う", meaning: "うしなう/Kehilangan" },{ word: "失敗", meaning: "しっぱい" },{ word: "失望", meaning: "しつぼう/Kekecewaan" },
  { word: "提供", meaning: "ていきょう/Menyajikan" },{ word: "設備", meaning: "せつび/Fasilitas" },{ word: "警備", meaning: "けいび/Keamanan/Patroli" },{ word: "備品", meaning: "びひん/Parabot" },
  { word: "備える", meaning: "そなえる/Menyiapkan" },{ word: "他人", meaning: "たにん" },{ word: "他社", meaning: "たしゃ" },{ word: "他者", meaning: "たしゃ" },
  { word: "係", meaning: "かかり/Biaya/Tugas" },{ word: "工場", meaning: "こうじょう" },{ word: "係る", meaning: "係る/Berhubungan dengan-" },{ word: "指導係", meaning: "しどうがかり/Pengajar" },
  { word: "係長", meaning: "かかりちょう/Bawah Kachou" },{ word: "係員", meaning: "かかりいん/Petugas" },{ word: "信頼", meaning: "しんらい/Memercayai/Andal" },{ word: "任せる", meaning: "まかせる" },
  { word: "信号", meaning: "しんごう" },{ word: "送信", meaning: "そうしん/Mengirim Email" },{ word: "記録", meaning: "きろく" },{ word: "仕える", meaning: "Melayani" },
  { word: "仲良し", meaning: "なかよし/Sahabat akrab" },{ word: "仲間", meaning: "なかま" },{ word: "仲介業者", meaning: "ちゅうかいぎょうしゃ/Perantara" },{ word: "個人", meaning: "こじん/Perorangan" },
  { word: "一個", meaning: "いっこ" },{ word: "王様", meaning: "おうさま" },{ word: "担任", meaning: "たんにん/Ketua/Wali Kelas" },{ word: "保存", meaning: "ほぞん/Menyimpan" },
  { word: "保護", meaning: "ほご/Melindungi" },{ word: "保険", meaning: "ほけん" },{ word: "保育園", meaning: "ほいくえん/Penitipan bocil" },{ word: "更に", meaning: "さらに/Selanjutnya/Bertambah" },
  { word: "便利", meaning: "べんり" },{ word: "機械", meaning: "きかい" },{ word: "不便", meaning: "ふべん" },{ word: "集まる", meaning: "あつまる" },
  { word: "人数", meaning: "にんずう/Jumlah orang" },{ word: "倍", meaning: "ばい" },{ word: "倍増", meaning: "ばいぞう/Dua kali lipat" },{ word: "占い師", meaning: "うらないし/Peramal" },
  { word: "優しい", meaning: "やさしい" },{ word: "優秀", meaning: "ゆうしゅう/Terbaik/Unggul" },{ word: "優勝", meaning: "ゆうしょう/Juara/Kemenangan" },{ word: "優先", meaning: "ゆうせん/Prioritas" },
  { word: "到着", meaning: "とうちゃく" },{ word: "倒す", meaning: "たおす/Menjatuhkan" },{ word: "倒れる", meaning: "たおれる/Tumbang/Jatuh" },{ word: "面倒", meaning: "めんどう" },
  { word: "圧倒的", meaning: "あっとうてき/Tidak seimbang/Gap nya jauh" },{ word: "倒産", meaning: "とうさん/Bangkrut" },{ word: "例えば", meaning: "たとえば" },{ word: "例文", meaning: "れいぶん" },
  { word: "例外", meaning: "れいがい/Pengecualian" },{ word: "事例", meaning: "じれい/Kasus(Peristiwa)" },{ word: "物事", meaning: "ものごと/Hal" },{ word: "一例", meaning: "いちれい" },
  { word: "例題", meaning: "れいだい/Misal" },{ word: "解く", meaning: "とく/Menguraikan" },{ word: "規則", meaning: "きそく" },{ word: "側", meaning: "がわ" },
  { word: "右側", meaning: "みぎがわ" },{ word: "外側", meaning: "そとがわ" },{ word: "内側", meaning: "うちがわ" },{ word: "裏側", meaning: "うらがわ" },
  { word: "反対側", meaning: "はんたいがわ" },{ word: "お通り側", meaning: "おどおりがわ/Sisi jalan" },{ word: "包む", meaning: "つつむ/Membungkus" },{ word: "布団", meaning: "ふとん" },
  { word: "包丁", meaning: "ほうちょう/Pisau dapur" },{ word: "早起き", meaning: "はやおき" },{ word: "記す", meaning: "しるす/Tertulis" },{ word: "日記", meaning: "にっき" },
  { word: "記念", meaning: "きねん/Peringatan/Kenang-kenangan" },{ word: "久しい", meaning: "ひさしい" },{ word: "久しぶり", meaning: "ひさしぶり" },{ word: "危ない", meaning: "あぶない" },
  { word: "危うい", meaning: "あやうい" },{ word: "危険", meaning: "きけん" },{ word: "負ける", meaning: "まける" },{ word: "結婚", meaning: "けっこん" },
  { word: "結婚式", meaning: "けっこんしき" },{ word: "夫婦", meaning: "ふうふ/Suami Istri" },{ word: "重要", meaning: "じゅうよう/Penting" },{ word: "主要", meaning: "しゅよう/Terutama" },
  { word: "不要", meaning: "ふよう/Tidak Penting" },{ word: "季節", meaning: "きせつ" },{ word: "四季", meaning: "しき/Empat Musim" },{ word: "爪", meaning: "つめ" },
  { word: "胸", meaning: "むね" },{ word: "乳", meaning: "ちち/Payudara" },{ word: "牛乳", meaning: "ぎゅうにゅう" },{ word: "与える", meaning: "あたえる/Memberi" },
  { word: "説明会", meaning: "せつめいかい" },{ word: "解説", meaning: "かいせつ/Uraian/Penjelasan" },{ word: "小説", meaning: "しょうせつ/Novel" },{ word: "小説家", meaning: "しょうせつか/Novelis" },
  { word: "税金", meaning: "ぜいきん/Pajak" },{ word: "求める", meaning: "もとめる/Meminta" },{ word: "卓球", meaning: "たっきゅう/Tenis Meja" },{ word: "地球", meaning: "ちきゅう/Bumi" },
  { word: "電球", meaning: "でんきゅう/Bohlam" },{ word: "希望", meaning: "きぼう" },{ word: "希望者", meaning: "きぼうしゃ" },{ word: "便り", meaning: "たより/Kabar" },
  { word: "欠ける", meaning: "かける/Kekurangan/Pecah" },{ word: "進む", meaning: "すすむ" },{ word: "欠席", meaning: "けっせき/Absen" },{ word: "起床", meaning: "きしょう" },
  { word: "要る", meaning: "いる" },{ word: "指先", meaning: "ゆびさき" },{ word: "受ける", meaning: "うける" },{ word: "受け取る", meaning: "うけとる" },
  { word: "引き受ける", meaning: "ひきうける/Menerima/Menyanggupkan" },{ word: "受付", meaning: "うけつけ" },{ word: "愛しい", meaning: "いとしい" },{ word: "愛する", meaning: "あいする" },
  { word: "愛し合う", meaning: "あいしあう" },{ word: "可愛い", meaning: "可愛い" },{ word: "平日", meaning: "へいじつ/Weekday" },{ word: "呼ぶ", meaning: "よぶ" },
  { word: "及ぶ", meaning: "およぶ/Jangkauan" },{ word: "肺", meaning: "はい/Paru-paru" },{ word: "吸収", meaning: "きゅうしゅう/Penyerapan" },{ word: "呼吸", meaning: "こきゅう/Nafas" },
  { word: "否定", meaning: "ひてい/Penolakan" },{ word: "拒否", meaning: "きょひ/Penolakan" },{ word: "否定的", meaning: "ひていてき/Penyangkalan" }
  
  ];
  
  let currentVocabulary = {};
  
  function getRandomVocabulary() {
    const randomIndex = Math.floor(Math.random() * vocabulary.length);
    return vocabulary[randomIndex];
  }
  
  function nextVocabulary() {
    // Get a random vocabulary and display the word
    currentVocabulary = getRandomVocabulary();
    document.getElementById("word").textContent = currentVocabulary.word;
  
    // Enable the "Show Meaning" button and hide "Show Vocab"
    document.getElementById("show-meaning").disabled = false;
    document.getElementById("show-vocab").style.display = "none";
  }
  
  function showMeaning() {
    // Show the meaning of the current vocabulary
    document.getElementById("word").textContent = currentVocabulary.meaning;
  
    // Disable the "Show Meaning" button and show "Show Vocab"
    document.getElementById("show-meaning").disabled = true;
    document.getElementById("show-vocab").style.display = "inline-block";
  }
  
  function showVocab() {
    // Show the vocabulary word again
    document.getElementById("word").textContent = currentVocabulary.word;
  
    // Disable the "Show Vocab" button and enable the "Show Meaning" button
    document.getElementById("show-vocab").style.display = "none";
    document.getElementById("show-meaning").disabled = false;
  }
  
