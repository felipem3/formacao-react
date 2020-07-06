import M from 'materialize-css'

const Popup = {
  exibeMensagem: (state, msg) => {
    console.log(msg)
    if (state === "success") {
      M.toast({ html: msg, classes: 'green', displayLength: 2000 })
    }

    if (state === 'error') {
      M.toast({ html: msg, classes: 'red', displayLength: 2000 })
    }
  }
}

export default Popup