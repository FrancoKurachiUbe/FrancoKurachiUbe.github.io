export default ({props}) => {
    return(
      <li className="nav-item">
        <a className="nav-link active" href={`/#${props}`}>{props}</a>
      </li>
    )
}