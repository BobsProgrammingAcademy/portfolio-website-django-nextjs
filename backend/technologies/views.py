from rest_framework.generics import ListAPIView
from rest_framework import permissions

from .models import Technology
from .serializers import TechnologySerializer


class TechnologyListView(ListAPIView):
  permission_classes = (permissions.AllowAny, )
  queryset = Technology.objects.all()
  serializer_class = TechnologySerializer
  pagination_class = None
