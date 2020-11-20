<template>
    <div class="table-validity">
        <h2 class="table-validity__title">Vigencia</h2>
        <table class="table-validity__table" border="1">
            <thead class="table-validity__thead">
                <tr>
                    <td class="table-validity--border0"></td>
                    <td>Inicio</td>
                    <td>Fin</td>
                </tr>
            </thead>
            <tbody class="table-validity__body">
                <tr>
                    <td class="table-validity--num">1.</td>
                    <td>22/01/2018</td>
                    <td>23/05/2022</td>
                </tr>
                <tr>
                    <td class="table-validity--num">2.</td>
                    <td>22/01/2018</td>
                    <td>23/05/2022</td>
                </tr>
                <tr>
                    <td class="table-validity--num">3.</td>
                    <td>22/01/2018</td>
                    <td>23/05/2022</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name : "ValidityTable"
}
</script>

<style lang="scss" scoped>
    .table-validity {
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        &__title {
            font-size: 16px;
            padding: 2px;
            color: #E64B16;
            border: 1px solid #111111;
            width: 100%;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            border-bottom: 0px;
            font-size: 14px;
        }

        &__table {
            width: 100%;
            padding: 0;
            border-spacing: 0;
        }

        &__thead {
            background-color: #4d4d4d;
            color: #ffffff;
            font-size: 12px;
            font-weight: bold;;
            td {
                padding: 2px;
                border: 0px;
            }
        }

        &--border0 {
            border-right: 0px;
        }

        &--num {
            color:#E64B16;
        }

    }
</style>