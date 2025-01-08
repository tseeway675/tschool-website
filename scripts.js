<script>
function toggleFloatingButtons() {
    const buttons = document.getElementById('floating-buttons');
    buttons.style.display = buttons.style.display === 'none' ? 'block' : 'none';
}

// Ensure the '深入了解' button calls this function
document.getElementById('_2108_1294_Component_3').onclick = toggleFloatingButtons;
</script>
