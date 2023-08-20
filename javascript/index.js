// faq's
const faqArray = [
  {
    head: "How many team members can I invite?",
    content: `You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.`,
  },
  {
    head: "What is the maximum file upload size?",
    content: `No more than 2GB. All files in your account must fit your allotted storage space.`,
  },
  {
    head: "How do I reset my password?",
    content: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
  },
  {
    head: "Can I cancel my subscription?",
    content: `Yes! Send us a message and we’ll process your request no questions asked.`,
  },
  {
    head: "Do you provide additional support?",
    content: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
  },
];
// setting html elements vars
const faqList = document.querySelector("#faq-list");
// add faq func
function addFaq(head,content) {
  const container = document.createElement("div");
  container.className = 'faq-item'
  container.innerHTML = `
    <div class="head">
              <h2>${head}</h2>
              <i></i>
            </div>
            <div class="body">${content}</div>
    `;
    return container;
}
//
function initFaqs(faqArray){
    const f = document.createDocumentFragment()
    faqArray.forEach(el => {
        f.appendChild(addFaq(el.head,el.content))
        f.appendChild(document.createElement('span'))
    });
    faqList.appendChild(f)
}
initFaqs(faqArray)
//
faqList.addEventListener('click',(e)=>{
  if(e.target.classList.contains('active')){
    e.target.classList.remove('active')
    return;
  }
  for (const child of faqList.children) {
    child.classList.remove('active')
  }
    e.target.classList.add('active')
})