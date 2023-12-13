import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function LoadingSkeletons() {
    return (
        <Card width="300px" marginX={5} rounded={10} overflow="hidden" >
            <Skeleton height="200px" />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    );
}
