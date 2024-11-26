function toggleMode() {
  const html = document.documentElement
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./Assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Gabriel Gusmão dentro de um veículo, usando camise azul e cavanhaque"
    )
  } else {
    img.setAttribute("src", "./Assets/Avatar.png")
  }
}
