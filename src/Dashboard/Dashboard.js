import React from 'react';
import './Dashboard.css'; 
import { Bar, Pie } from 'react-chartjs-2'; // biblioteca para o grafico
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

function Dashboard() {
  // o gráfico de barras
  const barData = {
    labels: ['Legumes', 'Frutas', 'Carnes', 'Laticínios', 'Bebidas'],
    datasets: [
      {
        label: 'Quantidade',
        data: [24, 7, 2, 18, 37], 
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  // gráfico de barras
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  // o gráfico de pizza
  const pieData = {
    labels: ['Legumes', 'Frutas', 'Carnes', 'Laticínios', 'Bebidas'],
    datasets: [
      {
        label: 'Composição',
        data: [24, 7, 2, 18, 37], 
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };

  //meu grafico 
  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>MONITORAMENTO</h1>
        <nav>
          <a href="#">HISTÓRICO</a>
          <a href="#">SENSORES</a>
        </nav>
        <div className="header-icons">
          <i className="bell-icon">🔔</i>
          <i className="settings-icon">⚙️</i>
        </div>
      </header>

      <div className="cards-section">
        <div className="card">
          <img src="Legumes.jpg" alt="Legumes" />
          <p>24 unidades<br />Legumes<br />Válido até: 25/10/2024</p>
        </div>
        <div className="card">
          <img src="Frutas.jpg" alt="Frutas" />
          <p>7 unidades<br />Frutas<br />Válido até: 12/10/2024</p>
        </div>
        <div className="card warning">
          <img src="Carnes.jpg" alt="Carnes" />
          <p>2 unidades<br />Carnes<br />Válido até: 19/10/2024</p>
        </div>
        <div className="card">
          <img src="Lactinios.jpg" alt="Laticínios" />
          <p>18 unidades<br />Laticínios<br />Válido até: 30/10/2025</p>
        </div>
        <div className="card">
          <img src="Bebidas.jpg" alt="Bebidas" />
          <p>37 unidades<br />Bebidas<br />Válido até: 08/01/2026</p>
        </div>
        <button className="ver-tudo-btn">VER TUDO →</button>
      </div>

      <div className="charts-section">
        <div className="chart-container">
          <h2>QUANTIDADE POR CATEGORIA</h2>
          <div className="chart">
            <Bar data={barData} options={barOptions} />
          </div>
        </div>
        <div className="chart-container">
          <h2>COMPOSIÇÃO DO ESTOQUE</h2>
          <div className="chart">
            <Pie data={pieData} options={pieOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
