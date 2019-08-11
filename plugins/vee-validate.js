import Vue from 'vue';
import VeeValidate from 'vee-validate';
import ko from 'vee-validate/dist/locale/ko.js'

Vue.use(VeeValidate, {
    locale: 'ko',
    dictionary: {
        ko: {
            messages: {
                ...ko.messages,
                email: () => `올바른 이메일 형식이 아닙니다.`,
                required: (name) => `'${name}' 항목은 필수 정보입니다.`
            }
        }
    },
    events: 'change|blur'
});