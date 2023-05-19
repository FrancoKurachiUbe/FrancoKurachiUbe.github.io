export default ({img, name, url}) => {
    return(
        <a href={url} target='_blank'>
            <li className="ms-3">
                <img src={img} alt={name} />
                <span className='d-none'>Perfil de {name}</span>
            </li>
        </a>
    )
}