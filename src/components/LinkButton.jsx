function LinkButton({ to, navigate, className, ariaLabel, isActive = false, children }) {
  const linkClassName = [className, isActive ? 'active-link' : ''].filter(Boolean).join(' ');

  return (
    <a
      href={to}
      className={linkClassName || undefined}
      aria-label={ariaLabel}
      aria-current={isActive ? 'page' : undefined}
      onClick={(event) => {
        event.preventDefault();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
}

export default LinkButton;
