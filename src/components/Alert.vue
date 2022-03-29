<template>
  <div class="alert">
    <div class="alert-success">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-check2"
        viewBox="0 0 16 16"
      >
        <path
          d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
        />
      </svg>
    </div>
    <div class="alert-message">Compte Creer</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.alert {
  position: absolute;
  top: 5em;
  right: 1em;
  width: 15em;
  display: flex;
  background-color: seagreen;
  box-shadow: 0px 5px 5px -5px green;
  border-radius: 55px;
  padding: 1em;
  align-items: center;
  gap: 1em;
  font-weight: bold;
  color: white;
}
</style>    