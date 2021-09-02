    const inputsСhange = () => {
        const allInputs = [...document.getElementsByTagName('input')];
        allInputs.forEach((elem) => {
            elem.addEventListener('blur', () => { 
            //инпут "Ваше имя" - только кирилица и запятые, первая буква каждого слова - заглавная, удалены все лишние пробелы и точки
                if (elem.getAttribute('name') === 'user_name') {
                        elem.value = elem.value.replace(/([^а-я ]|^ )/gi, '');
                        elem.value = elem.value.replace(/[а-я]+/gi, (match) => match.toLowerCase());
                    elem.value = elem.value.replace(/((?:^|\s))./g, (match) => `${match.toUpperCase()}`);
                    elem.value = elem.value.replace(/ {2,}/g, ' ');
                }
                //инпут "ваше сообщение - только кирилица и запятые"
                if (elem.getAttribute('name') === 'user_message') {
                        elem.value = elem.value.replace(/([^а-я\,\.\!\?-]|^ )/gi, '');
                        elem.value = elem.value.replace(/-{2,}/g, '-');
                        elem.value = elem.value.replace(/\s{2,}/g, ' ');
                }

                //интупы "email" - только латиница и спецсимволы
                if (elem.getAttribute('name') === 'user_email') {
                    elem.value = elem.value.replace(/([^a-z@-_!~*'\.]|-$|^-)/gi, '');
                    elem.value = elem.value.replace(/(^[a-z-_!~*'\.+]@[a-z{,5}\.[a-z{,5}])/gi, '');
                    elem.value = elem.value.replace(/\s{2,}/, ' ');
                    elem.value = elem.value.replace(/-{2,}/g, '-').trim();
                }
                //инпуты "номер телефона"
                if (elem.getAttribute('name') === 'user_phone') {
                        elem.value = elem.value.replace(/[^\d\+]/gi, '');
                        // elem.value = elem.value.replace(/\s{2,}/, '');
                        // elem.value = elem.value.replace(/-{2,}/g, '-');
                        // elem.value = elem.value.replace(/^(- )$/g, '').trim();
                }
                if (elem.classList.contains('calc-item')) {
                    elem.value = elem.value.replace(/[^0-9]/g, '');
                }
                
            });
        });
};
    
export default inputsСhange;