export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted-foreground md:flex-row">
        <p>
          <span className="font-serif font-semibold text-primary">Avera Bakery</span>
          {' — dibuat dengan cinta di Cinere.'}
        </p>
        <p>{`© ${new Date().getFullYear()} Avera Bakery. Hak cipta dilindungi.`}</p>
      </div>
    </footer>
  )
}
