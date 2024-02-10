<template>
    <div class="login-card">
        <h4 class="login-card__title">{{ $t(`${loginCardData.title}`) }}</h4>
        <p v-if="loginCardData.subTitle" class="block-login__subtitle">{{ $t(`${loginCardData.subTitle}`) }}</p>
        <slot name="card-block">
            <div class="login-card__forms">
                <label> {{ $t('loginBox.inputLogin.label') }}<span class="login-card__req-star">*</span></label>
                <v-text-field
                    :label="$t('loginBox.inputLogin.placeholder')"
                    hide-details="auto"
                    :rules="emailRules"
                    v-model="email"
                    class="login-card__input"
                    variant="solo"
                ></v-text-field>
                <label> {{ $t('loginBox.inputPassword.label') }}<span class="login-card__req-star">*</span> </label>
                <v-text-field
                    v-model="password"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[passwordRules.required, passwordRules.min]"
                    :type="show1 ? 'text' : 'password'"
                    name="input-10-1"
                    :label="$t('loginBox.inputPassword.placeholder')"
                    hint="At least 8 characters"
                    counter
                    @click:append="show1 = !show1"
                    variant="solo"
                ></v-text-field>
            </div>
        </slot>
        <slot name="card-actions"
            ><div class="login-card__actions auth">
                <div class="auth__sing-in">
                    <v-btn
                        @click="loginWithEmailAndPassword(email, password)"
                        :disabled="!isDataValue"
                        class="auth__button button"
                    >
                        {{ $t('loginBox.buttons.signIn') }}
                    </v-btn>
                    <a class="auth__link" href="#">{{ $t('loginBox.buttons.ressPasword') }}</a>
                </div>
                <div v-if="!newCreateAcc" class="auth__google">
                    <v-btn @click="loginWithGoogleEmailPopup" class="google-btn">
                        <font-awesome-icon :icon="['fab', 'google']" />
                    </v-btn>
                </div></div
        ></slot>
    </div>
</template>

<script setup>
import { useLocales } from '@/modulHelpers/i18n'
import { ref, computed, watch, reactive } from 'vue'
const props = defineProps({
    loginCardData: {
        type: Object,
        required: true
    }
})
const emailRules = reactive([
    (value) => !!value || 'Required.',
    (value) => {
        const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || t('loginBox.inputLogin.error')
    }
])
const passwordRules = reactive([
    {
        required: (value) => !!value || 'Required.',
        min: (v) => v.length >= 8 || 'Min 8 characters'
    }
])
const show1 = ref(false)

const emit = defineEmits(['update:newEmail', 'update:newPass'])
import { useRouter } from 'vue-router'
const router = useRouter()
const { t } = useLocales()

import { useAuthStore } from '@/stores/auth'
const { signInWithWithEmailAndPassword, loginWithGoogleAccount } = useAuthStore()

const email = ref(null)
const password = ref(null)

watch([email, password], ([new_email, new_password]) => {
    emit('update:newEmail', new_email)
    emit('update:newPass', new_password)
})

const isDataValue = computed(() => {
    return email.value && password.value
})

function loginWithEmailAndPassword(email, password) {
    signInWithWithEmailAndPassword(email, password).then(() => {
        router.push({
            name: 'home'
        })
    })
}
function loginWithGoogleEmailPopup() {
    loginWithGoogleAccount().then(() => {
        router.push({
            name: 'home'
        })
    })
}
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.login-card {
    background: #f5f7ff;
    @include adaptiveValue('padding-top', 37, 20);
    @include adaptiveValue('padding-left', 57, 30);
    @include adaptiveValue('padding-right', 57, 30);
    @include adaptiveValue('padding-bottom', 37, 20);
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: toRem(25);
    @media (min-width: $tablet) {
        flex: 0 1 toRem(564);
        align-items: flex-start;
    }
    &__title {
        @include adaptiveValue('font-size', 20, 18);
        @media (max-width: $tablet) {
        }
    }

    &__subtitle {
        @include adaptiveValue('font-size', 14, 12);
        font-weight: 300;
        line-height: 214.285714%; /* 30/14 */
    }
    &__forms {
        align-self: flex-start;
        width: 100%;
    }
    &__req-star {
        color: #c94d3f;
        margin-left: toRem(1.5);
        font-size: toRem(13);
        font-weight: 600;
        line-height: 210%;
    }

    &__input {
        margin-right: toRem(40);
    }
    &__actions {
        display: flex;
        flex-direction: column;
        row-gap: toRem(10);
    }
}

.google-btn {
    background: #fff;
    color: #c94d3f;
    &:hover {
        background-color: #fff;
        border: solid toRem(1) #0156ff;
        transition: all 0.3s;
        color: #0156ff;
    }
}
.mail-color {
    color: red;
}

.auth {
    // .auth__sing-in
    color: #0156ff;
    &__sing-in {
        display: flex;
        align-items: center;
        column-gap: toRem(10);
    }

    // .auth__link

    &__link {
        @media (any-hover: hover) {
            &:hover {
                text-decoration: underline;
            }
        }
    }
    &__google {
        @media (max-width: $tablet) {
            text-align: center;
        }
    }
}
</style>
