// Sample data for FAQs with expanded questions and answers
let faqs = [
    { 
        question: "How do I register for the SDA Departmental Portal?", 
        answer: "To register, go to the registration page, enter your phone number, password, and select your department. Click the 'Register' button to complete the process." 
    },
    { 
        question: "Can I change my department after registration?", 
        answer: "Yes, you can change your department through the 'Profile Management' section. Select the new department from the dropdown menu and update your profile." 
    },
    { 
        question: "How do I log in to my account?", 
        answer: "On the login page, enter your registered phone number and password, then click 'Login'. If your credentials are correct, you will be redirected to your profile management area." 
    },
    { 
        question: "What should I do if I forget my password?", 
        answer: "If you forget your password, you can click on the 'Forgot Password?' link on the login page. Follow the instructions to reset your password via email or SMS." 
    },
    { 
        question: "How can I update my profile information?", 
        answer: "To update your profile, log in to your account and navigate to the 'Profile Management' section. You can modify your name, gender, department, role, church details, and upload a new passport photo." 
    },
    { 
        question: "Where can I find my departmental leader's contact information?", 
        answer: "You can find your departmental leader's contact information in the 'Departmental Contacts' section of your profile or contact the admin for assistance." 
    },
    { 
        question: "How secure is my personal information on the SDA Departmental Portal?", 
        answer: "We prioritize the security and confidentiality of your personal information. The portal uses encryption and secure storage practices to protect your data." 
    },
    { 
        question: "Can I delete my account?", 
        answer: "Yes, you can delete your account by contacting the admin or using the 'Delete Account' option in the 'Profile Management' section. Deleting your account will permanently remove all your data from the portal." 
    },
    { 
        question: "What should I do if I encounter technical issues with the portal?", 
        answer: "If you experience technical issues, please try refreshing the page or clearing your browser's cache and cookies. If the problem persists, contact the admin for technical support." 
    },
    { 
        question: "How often should I update my password?", 
        answer: "For security reasons, we recommend updating your password regularly, at least every 3 to 6 months. Choose a strong password that includes a mix of letters, numbers, and special characters." 
    }
];

// Function to display FAQs
function displayFAQs() {
    let faqSection = document.getElementById('faq-section');
    faqSection.innerHTML = '';

    faqs.forEach((faq, index) => {
        let faqItem = document.createElement('div');
        faqItem.classList.add('faq-item');
        faqItem.innerHTML = `
            <h3>${faq.question}</h3>
            <p>${faq.answer}</p>
        `;
        faqSection.appendChild(faqItem);
    });
}

// Function to submit a new question
function submitQuestion() {
    let questionText = document.getElementById('question').value.trim();

    if (questionText !== '') {
        // For simplicity, assume the question is directly added to the FAQs
        let newFAQ = {
            question: questionText,
            answer: "Thank you for your question! Our team will review it and provide an answer soon."
        };

        faqs.push(newFAQ);
        displayFAQs();

        // Clear the question textarea
        document.getElementById('question').value = '';
    }
}

// Display initial FAQs on page load
displayFAQs();
