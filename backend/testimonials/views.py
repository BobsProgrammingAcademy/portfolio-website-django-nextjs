from rest_framework.generics import ListAPIView
from rest_framework import permissions

from .models import Testimonial
from .serializers import TestimonialSerializer


class TestimonialListView(ListAPIView):
  permission_classes = (permissions.AllowAny, )
  queryset = Testimonial.objects.all()
  serializer_class = TestimonialSerializer
  pagination_class = None
