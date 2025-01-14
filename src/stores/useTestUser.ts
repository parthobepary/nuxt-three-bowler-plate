import {defineStore} from 'pinia'
import type {Component} from "~/interfaces/Component";
import {getData} from "#imports";

export const useEditorStore = defineStore('definition', () => {
    const definition = ref<Component[]>([]);
    const selectedElement = ref<Component | undefined>();
    const template = ref<object>({});
    const templates = ref<Component[]>([]);
    const setDefinition = (payload: Component[]) => {
        definition.value = payload;
    }

    const getDraft = async (type: string = '') => {
        const route = useRoute();
        let url = type === 'template' ? `sample-page/${route.params.id}` : `page/${route.params.id}/draft`;
        const {data, error} = await getData(url, 'build');
        if (error && error.value) {
        } else {
            if (typeof data.value?.components === 'string') {
                setDefinition(JSON.parse(data.value?.components) || JSON.parse(data.value?.data?.components) || []);
            } else {
                setDefinition(data.value?.components || data.value?.data?.components || []);
            }
            template.value = data.value || {};
        }
    };


    return {template, definition, selectedElement, templates, setDefinition, getDraft}
})