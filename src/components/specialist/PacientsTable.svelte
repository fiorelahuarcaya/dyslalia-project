<script lang="ts">

    import PatientDetail from "./PatientDetail.svelte";

  let patients = [
    {
      id_child: 1,
      lastname: "Melendez Sulca",
      name: "Fabiola",
      birthdate: "2017-05-12",
      gender: "F",
      id_parent: 1,
      parent: {
        lastname: "Sulca Flores",
        name: "Roxana",
      },
    },
    {
      id_child: 2,
      lastname: "Gomez Rodriguez",
      name: "Juan",
      birthdate: "2016-08-25",
      gender: "M",
      id_parent: 2,
      parent: {
        lastname: "Rodriguez Perez",
        name: "Maria",
      },
    },
    {
      id_child: 3,
      lastname: "Lopez Martinez",
      name: "Lucia",
      birthdate: "2018-03-17",
      gender: "F",
      id_parent: 3,
      parent: {
        lastname: "Martinez Sanchez",
        name: "Carlos",
      },
    },
    {
      id_child: 4,
      lastname: "Perez Fernandez",
      name: "Diego",
      birthdate: "2019-11-02",
      gender: "M",
      id_parent: 4,
      parent: {
        lastname: "Fernandez Ramirez",
        name: "Luisa",
      },
    },
    {
      id_child: 5,
      lastname: "Vargas Torres",
      name: "Ana",
      birthdate: "2015-06-10",
      gender: "F",
      id_parent: 5,
      parent: {
        lastname: "Torres Lopez",
        name: "Pedro",
      },
    },
    {
      id_child: 6,
      lastname: "Gonzalez Diaz",
      name: "Mateo",
      birthdate: "2020-02-08",
      gender: "M",
      id_parent: 6,
      parent: {
        lastname: "Diaz Perez",
        name: "Laura",
      },
    },
    {
      id_child: 7,
      lastname: "Sanchez Ramirez",
      name: "Valentina",
      birthdate: "2016-12-19",
      gender: "F",
      id_parent: 7,
      parent: {
        lastname: "Ramirez Gomez",
        name: "Javier",
      },
    },
    {
      id_child: 8,
      lastname: "Fernandez Castillo",
      name: "Sofia",
      birthdate: "2018-07-03",
      gender: "F",
      id_parent: 8,
      parent: {
        lastname: "Castillo Herrera",
        name: "Antonio",
      },
    },
    {
      id_child: 9,
      lastname: "Martinez Lopez",
      name: "Luis",
      birthdate: "2017-09-28",
      gender: "M",
      id_parent: 9,
      parent: {
        lastname: "Lopez Soto",
        name: "Isabel",
      },
    },
    {
      id_child: 10,
      lastname: "Perez Suarez",
      name: "Elena",
      birthdate: "2019-04-14",
      gender: "F",
      id_parent: 10,
      parent: {
        lastname: "Suarez Gomez",
        name: "Andres",
      },
    },
  ];

  let patienSelect = {
      id_child: 2,
      lastname: "Gomez Rodriguez",
      name: "Juan",
      birthdate: "2016-08-25",
      gender: "M",
      id_parent: 2,
      parent: {
        lastname: "Rodriguez Perez",
        name: "Maria",
      },
    }
 
  function calculateAge(birthdate: string): number {
    const birthdateDate = new Date(birthdate);
    const today = new Date();
    const yearsDiff = today.getFullYear() - birthdateDate.getFullYear();

    // Comprobamos si ya ha pasado el cumpleaños de este año
    if (
      today.getMonth() < birthdateDate.getMonth() ||
      (today.getMonth() === birthdateDate.getMonth() &&
        today.getDate() < birthdateDate.getDate())
    ) {
      return yearsDiff - 1; // Restamos 1 si el cumpleaños no ha pasado aún
    }

    return yearsDiff;
  }

  function restartDetail(patientId: number): void {
    console.log(`Se hizo clic en la fila con el ID de paciente: ${patientId}`);
    const detailsElement = document.querySelector('.details') as HTMLElement;
    detailsElement.style.display = 'none';
    detailsElement.style.display = 'flex';
 }
</script>

<div class="body">
  <div class="information-table">
    <div class="table">
      <h2>Pacientes</h2>
      <div class="content-table">
        <table>
          <thead>
            <tr>
              <th>N°</th>
              <th>Niño(a)</th>
              <th>Edad</th>
              <th>Género</th>
              <th>Apoderado(a)</th>
            </tr>
          </thead>
          <tbody>
            {#each patients as patient, i}
              <tr on:click={() => restartDetail(patient.id_child)}>
                <td>{i + 1}</td>
                <td>{patient.name} {patient.lastname}</td>
                <td>{calculateAge(patient.birthdate)} años</td>
                <td>{patient.gender === "F" ? "Femenino" : "Masculino"}</td>
                <td>{patient.parent.name} {patient.parent.lastname}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="details">
    <PatientDetail  idChild = 2/>
  </div>
</div>

<style>
  .body {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .body .information-table{
    display: flex;
    justify-content:center;
    width: 100%;
  }

  .table {
    display: flex;
    padding: 1.5rem 2rem;
    flex-direction: column;
    gap: 2rem;
    align-self: stretch;
  }

  .table h2 {
    color: var(--primary-700);
  }

  .table .content-table {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
  }

  /* Estilos generales de la tabla */
  table {
    width: 100%;
    border-collapse: collapse;
    font-family: Arial, sans-serif;
  }

  /* Estilo de las filas pares */
  tbody tr{
    background-color: var(--primary-50);
    cursor: pointer;
  }

  /* Estilo de las celdas encabezado */
  th {
    background-color: var(--primary-300);
    color: var(--primary-900);
    padding: 1rem;
    text-align: left;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  /* Estilo de las celdas de datos */
  td {
    padding: .5rem 1rem;
  }

  /* Estilo para celdas hover */
  tr:hover {
    background-color: var(--primary-200);
  }

  .details{
    min-width: 25rem;
    display: none;
    padding: 2rem;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    flex: 1 0 0;

    border-radius: 1.5rem 0rem 0rem 1.5rem;
    border: 1px solid var(--primary-300);
    background: var(--primary-200);
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  }

</style>
