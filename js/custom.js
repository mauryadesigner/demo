
document.querySelectorAll(".accordion-item").forEach((item) => {
  item.querySelector(".accordion-item-header").addEventListener("click", () => {
    item.classList.toggle("open");
  });
});

  const form = document.getElementById('form');
const from = document.getElementById('from');
const to_1 = document.getElementById('to_1');
const when_1 = document.getElementById('when_1');
const from_1 = document.getElementById('from_1');
const to_2 = document.getElementById('to_2');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const fromValue = from.value.trim();
    const to_1Value = to_1.value.trim();
    const when_1Value = when_1.value.trim();
    const from_1Value = from_1.value.trim();
    const to_2Value = to_2.value.trim();
    
    if(fromValue === '') {
        setErrorFor(from, 'From is required');
    } else {
        setSuccessFor(from);
    }
    
    if(to_1Value === '') {
        setErrorFor(to_1, 'To is required');
    } else {
        setSuccessFor(to_1);
    }

    if(when_1Value === '') {
        setErrorFor(when_1, 'When is required');
    } else {
        setSuccessFor(when_1);
    }

     if(from_1Value === '') {
        setErrorFor(from_1, 'From is required');
    } else {
        setSuccessFor(from_1);
    }

     if(to_2Value === '') {
        setErrorFor(to_2, 'To is required');
    } else {
        setSuccessFor(to_2);
    }
    
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
    







