import './environment-indicator.css';

const apiUrl = import.meta.env.VITE_API_URL ?? '';
const isTestEnvironment = [
  'api-test-setta.varten.com.br',
  'api-test-trackfit.varten.com.br',
].some(host => apiUrl.includes(host));

if (isTestEnvironment) {
  const indicator = document.createElement('div');
  indicator.className = 'test-environment-indicator';
  indicator.setAttribute('role', 'status');
  indicator.setAttribute('aria-label', 'Ambiente de teste');
  indicator.innerHTML = `
    <span class="test-environment-indicator__bar" aria-hidden="true"></span>
    <span class="test-environment-indicator__badge">
      <span aria-hidden="true">🐞</span>
      Ambiente de teste
    </span>
  `;
  document.body.append(indicator);
}
