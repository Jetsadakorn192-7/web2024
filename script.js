// Script for Navigation Menu Scroll Effect
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('header nav ul li a');

    // Smooth scrolling to sections
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth',
                });
            }
        });
    });
});

// Hero Button Scroll Effect
document.querySelector('.hero .btn').addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = document.getElementById('services');
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth',
        });
    }
});

// Contact Form Validation
const contactForm = document.querySelector('.contact form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Mock submission
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Email Validation Function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Scroll to Top Button (Optional)
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerText = '↑';
scrollToTopBtn.className = 'scroll-to-top';
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

$(function(){
    $("#quizBox").hide();
    $("#resultBox").hide();
  
    // เริ่มทำแบบทดสอบ
    $("#btnStart").click(function(){
      $("#startBox").hide();
      $("#quizBox").show();
      displayQuizList();
    });
  
    // ตรวจคำตอบ
    $("#btnCheckAnswer").click(function(){
      var score = 0;
      $("input[type='radio']:checked").each(function(){
        var questionIndex = $(this).attr('name').replace('q', '') - 1; 
        var selectedValue = parseInt($(this).val()); 
        if (selectedValue === quizlist[questionIndex].answer) {
          score++;
        }
      });
  
      $("#resultText").text("คุณได้คะแนน " + score + " คะแนน จากทั้งหมด " + quizlist.length + " ข้อ");
      $("#resultBox").show();
      $("#quizBox").hide();
    });
  
    // ฟังก์ชันกลับไปที่หน้าแรก
    $("#btnBackToStart").click(function(){
      $("#resultBox").hide();
      $("#startBox").show();
    });
  });
  
  function displayQuizList(){
    $("#quizListBox").html("<div class='p-1'>ข้อสอบ</div>");
    for(var i in quizlist){
      displayQuiz(i, quizlist[i]);
    }
  }
  
  function displayQuiz(i, q){
    var no = parseInt(i) + 1;
    var html = "<div class='p-2'>ข้อที่ "+no+".<div>"+q.title+"</div>";
    for(var c in q.options){
      var v = parseInt(c) + 1;
      html += "<div class='alert alert-info'>";
      html += "<input type='radio' name='q"+no+"' value='"+v+"'>"+v+". ";  
      html += q.options[c] + "</div>";  
    }
    html += "</div>";
    $("#quizListBox").append(html);
  }
