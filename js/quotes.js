const quotes = [
  {
    quote:
      "끈기는 미덕이다. 그렇지만 당신이 얼마나 노력하는지 모든 이들이 언제나 지켜보고 있어야 할 이유는 없다.",
    author: "마지막 강의, p77",
  },
  {
    quote: "인생은 과감한 모험, 혹은 아무것도 아니다.",
    author: "헬렌 켈러",
  },
  {
    quote:
      "자신의 업무에 대한 정확한 목표를 갖고 있지 않은 사람이 인재가 될 확률은 0.000001퍼센트보다도 낮다.",
    author: "피터 드러커",
  },
  {
    quote:
      "인생에 있어서 최고의 행복은, 우리가 사랑받고 있음을 확신하는 것이다.",
    author: "빅토르 위고",
  },
  {
    quote:
      "인간은 노력하는 한 방황하기 마련이니, 본능이 아무리 방해해도 선한 인간은 길을 잃지 않는다.",
    author: "괴테, 파우스트",
  },
  {
    quote:
      "'부족한 것'은, 무엇이 부족한지만 명확히 알게 되면 반드시 채워지고 회복된다. 그것이 인생이다.",
    author: "멘탈의 연금술, p267",
  },
  {
    quote:
      "지금 이 순간 당신이 극복해내는 힘든 상황은, 앞으로 다시는 당신에게 나타나지 않을 것이다.",
    author: "달라이 라마",
  },
  {
    quote:
      "세 사람이 길을 가면 반드시 내 스승이 있게 마련이다. 착한 사람한테서는 그 선함을 배우고, 악한 사람한테서는 그를 보고 자신의 잘못을 반성할 수 있다.",
    author: "공자",
  },
  {
    quote:
      "만나는 사람 모두에게서 무엇인가를 배울 수 있는 사람이 가장 현명한 사람이다.",
    author: "탈무드",
  },
  {
    quote:
      "인간은 무엇과도 바꿀 수 없는 소중한 시간을 버리고 있다 .소심하게 지내기에 인생은 너무나 짧다.",
    author: "앤드류 카네기",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
