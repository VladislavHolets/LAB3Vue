<template>
    <div class="notes-app">
        <notes-header :title="title" />
        <notes-editor @createNote="createNote" />
        <notes-grid :notes="notes" />
    </div>
</template>

<script>
    import NotesHeader from '@/components/NotesHeader.vue';
    import NotesEditor from '@/components/NotesEditor.vue';
    import NotesGrid from '@/components/NotesGrid.vue';
    const notes = localStorage.notes ? JSON.parse(localStorage.notes) : [];

    export default {
        name: 'notes-app',

        components: {
            NotesHeader,
            NotesEditor,
            NotesGrid,
        },

        data: () => ({
            title: 'Notes App',
            notes,
        }),

        methods: {
            createNote(note) {
                this.notes.push(note);
                localStorage.notes = JSON.stringify(notes);
            },

            deleteNote(id) {
                this.notes = this.notes.filter(note => note.id !== id);
                localStorage.notes = JSON.stringify(notes);
            },
        },
    };
</script>

<style lang="scss">
    $color: #eaeaea;

    * {
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        font-weight: 300;
        background-color: $color;
    }

    .notes-app {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 980px;
        margin: 0 auto;
    }
</style>
