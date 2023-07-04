export default {
  menu: {
    dashboard: 'Pannello di controllo',
    invoices: 'Fatture',
    booking: 'Prenotazioni',
    shop: 'Negozio',
    settings: 'Impostazioni',
    pending: 'Pendenti',
    paid: 'Pagate'
  },
  dashboard: {
    invoice: {
      settings: 'Configurazione della fatturazione',
      pending: 'Fatture pendenti',
      paid: 'Fatture pagate'
    },
    booking: {
      settings: 'Configurazione delle prenotazioni',
      pending: 'Prenotazioni pendenti',
      paid: 'Prenotazioni pagate'
    },
    shop: {
      settings: 'Configurazione del negozio',
      pending: 'Acquisti pendenti',
      paid: 'Acquisti pagati'
    }
  },
  welcome: 'Benvenuto',
  logout: 'Esci',
  error: {
    pageNotFound: 'Pagina non trovata',
    unauthorized: 'Non autorizzato',
    unauthenticated: 'Non autenticato',
    somethingWentWrong: 'Qualcosa è andato storto',
    backToTheHomePage: 'Tornare alla pagina principale',
  },
  auth: {
    loginEmail: 'Accesso',
    magicLink: 'Invia collegamento magico per email',
    magicLinkInstructions: 'Non è richiesta alcuna password.\n\nTi invieremo un link magico per accedere via e-mail.\n\nSe utilizzi Slack, Notion o Wallet of Satoshi potresti avere familiarità con questo metodo di accesso.\n\nPer proteggere il tuo account, abilita 2FA sul tuo account e-mail.',
    emailSent: 'Email inviata',
    checkEmail: 'Clicca il link inviato per email per accedere al tuo account',
    emailSubject: 'Accedi a {host}',
    emailContent: 'Accedi al tuo account su {host} facendo clic sul link:\n\n{url}\n\nSe non hai richiesto questa e-mail puoi tranquillamente ignorarla.'
  },
  customRules: {
    loginEmailRequired: 'L\'email è richiesta',
    loginEmailValid: '{value} non è un indirizzo email valido'
  }
}