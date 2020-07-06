const url = "http://localhost:8000/api/"

const consomeApi = (param = '', method = 'GET', body) => {
  return fetch(`${url}autor/${param}`, {
    method,
    headers: { 'content-type': 'application/json' },
    body
  })
    .then(res => apiService.TrataErros(res))
    .then(res => res.json())
}

const apiService = {
  ListaAutores: () => {
    return consomeApi()
  },
  CriaAutor: autor => {
    return consomeApi('', 'POST', autor)
  },
  ListaNomes: () => {
    return consomeApi("nome")
  },
  ListaLivros: () => {
    return consomeApi("livro")
  },
  RemoveAutor: (id) => {
    return consomeApi(id, 'DELETE')
  },
  TrataErros: res => {
    if (!res.ok) {
      throw Error(res.responseText)
    }
    return res
  }
}

export default apiService