const url = "http://localhost:8000/api/"

const apiService = {
  ListaAutores: () => {
    return fetch(`${url}autor`).then(res => apiService.TrataErros(res)).then(res => res.json())
  },
  CriaAutor: autor => {
    return fetch(`${url}autor`, { method: "POST", headers: { 'content-type': 'application/json' }, body: autor })
      .then(res => apiService.TrataErros(res))
      .then(res => res.json())
  },
  ListaNomes: () => {
    return fetch(`${url}autor/nome`)
      .then(res => apiService.TrataErros(res))
      .then(res => res.json())
  },
  ListaLivros: () => {
    return fetch(`${url}autor/livro`)
      .then(res => apiService.TrataErros(res))
      .then(res => res.json())
  },
  RemoveAutor: (id) => {
    return fetch(`${url}autor/${id}`, { method: "DELETE", headers: { 'content-type': 'application/json' } })
      .then(res => apiService.TrataErros(res))
      .then(res => res.json())
  },
  TrataErros: res => {
    if (!res.ok) {
      throw Error(res.responseText)
    }
    return res
  }
}

export default apiService