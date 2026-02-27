document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.querySelector('form[name="newsletter"]');
    if (!newsletterForm) return;

    // Inicializar el modal de Bootstrap
    const successModal = new bootstrap.Modal(document.getElementById('newsletterModal'));

    newsletterForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(newsletterForm);
        
        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            });

            if (response.ok) {
                // Mostrar modal de éxito
                successModal.show();
                // Limpiar el formulario
                newsletterForm.reset();
            } else {
                throw new Error('Error en el envío del formulario');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un error al procesar tu suscripción. Por favor, intenta de nuevo.');
        }
    });
});
