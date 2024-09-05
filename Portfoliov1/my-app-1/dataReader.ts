export interface Project {
    id: number;
    name: string;
    description: string;
    startdate: string;
    enddate: string;
    image: string;
}

export async function fetchData(): Promise<Project[]> {
    try {
        const response = await fetch('/projectinfo.json');
        const data = await response.json();
        console.log('Data:', data); 
        return data;
    } catch (error) {
        console.error('Error', error);
        return [];
    }
}
