<script lang="ts">
  export let idChild;

  let patient = {
    id_child: 2,
    lastname: "Gomez Rodriguez",
    name: "Juan",
    birthdate: "2016-08-25",
    gender: "M",
    id_parent: 2,
    parent: {
      lastname: "Rodriguez Perez",
      name: "Maria",
      cellphone: "999999999",
      email: "wade.warren@example.com"
    },
  };

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

  function formatBirthday(birthdate: string): string {
    const birthdateDate = new Date(birthdate);
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
    };
    const formatter = new Intl.DateTimeFormat("es-ES", options);
    return formatter.format(birthdateDate);
  }
</script>

<div class="avatar-name">
  <img src="/img/avatar-child.png" alt="Avatar" />
  <h3>{patient.name} {patient.lastname}</h3>
</div>

<div class="patient-info section-info">
  <p class="bold section-title">Información del Paciente</p>

  <div class="info">
    <p class="bold">Edad:</p>
    <p>{calculateAge(patient.birthdate)} años</p>
  </div>
  <div class="info">
    <p class="bold">Género:</p>
    <p>{patient.gender === "F" ? "Femenino" : "Masculino"}</p>
  </div>
  <div class="info">
    <p class="bold">Cumpleaños:</p>
    <p>{formatBirthday(patient.birthdate)}</p>
  </div>
</div>

<div class="parent-info section-info">
  <p class="bold section-title">Información del Apoderado</p>
  <div class="info">
    <p class="bold">Nombre:</p>
    <p>{patient.parent.name} {patient.parent.lastname}</p>
  </div>
  <div class="info">
    <p class="bold">Celular:</p>
    <p>{patient.parent.cellphone}</p>
  </div>
  <div class="info">
    <p class="bold">Correo:</p>
    <p>{patient.parent.email}</p>
  </div>
</div>

<button>
    Ver Progreso
</button>
<style>
  .avatar-name {
    max-width: 10rem;
    text-align: center;
  }

  .avatar-name img{
    width: 7.25rem;
  }

  .section-title {
    font-size: 1rem;
    color: var(--primary-600);
  }

  .section-info{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .section-info .info{
    font-size: .9rem;
  }

  button{
    border-radius: 0.5rem;
    background: var(--light);
  }

  button:hover{
    border-radius: 0.5rem;
    background: var(--primary-600);
    color: var(--light);
  }
</style>
