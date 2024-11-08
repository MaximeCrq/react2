function Template({children}){
    return(
        <>
            <header>
                <img src="https://picsum.photos/200" alt="Logo" />
                <h1>Mon Super site</h1>
                <nav>
                    <ul>
                        <li>Accueil</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>

            <main>
                <h1>JE SAIS PAS</h1>
                {children}
            </main>

            <footer>
                <nav>
                    <ul>
                        <li>Mentions Légales</li>
                        <li>Politique de Confidentialité</li>
                    </ul>

                </nav>
            </footer>
        </>
    )
}
export default Template