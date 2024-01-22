import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
export function useLocales() {
    const { t, locale } = useI18n({ useScope: 'global' })

    function setLocale(lang) {
        locale.value = lang
        localStorage.setItem('lastLocale', lang)
    }
    function checkLocale() {
        const lastLocale = localStorage.getItem('lastLocale')
        if (lastLocale && lastLocale !== locale.value) {
            setLocale(localStorage.getItem('lastLocale'))
            useRouter().go()
        }
        return lastLocale
    }
    const currentLocale = computed(() => checkLocale())

    window.addEventListener('storage', () => checkLocale())

    return {
        currentLocale,
        locale,
        t,
        setLocale,
        checkLocale
    }
}
