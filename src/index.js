import Tags from './components/Tags/Tags';
import imgDelete from './img/delete.png';
import './index.css';

const inputTagName = document.querySelector('#input-tag-name');
const checkboxReadOnly = document.querySelector('#readonly');
const btnAdd = document.querySelector('#btn-add');
const ulTags = document.querySelector('#tags');

const objTags = new Tags(Tags.getLocalStorage());

btnAdd.addEventListener('click', clickBtnAdd);
checkboxReadOnly.addEventListener('click', clickCheckboxReadOnly);
ulTags.addEventListener('click', clickUlTags);

function clickCheckboxReadOnly() {
    objTags.readonly = checkboxReadOnly.checked;
}

function clickBtnAdd() {
    if (objTags.add(inputTagName.value)) {
        inputTagName.value = '';
        updateTags();
    }
}

function clickUlTags(e) {
    const tag = e.target.getAttribute('data-tag');

    if (tag) {
        if (objTags.remove(tag)) {
            updateTags();
        }
    }
}

function updateTags() {
    ulTags.innerHTML = objTags.tags.map(tag => `<li>
        <span>${tag}</span>
        <img data-tag="${tag}" src="${imgDelete}" alt="${tag}" />
    </li>`).join('');
}

updateTags();